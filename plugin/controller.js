/**
 * Created by Nicolas on 10/21/15.
 */
(function (Controller) {
    'use strict';

    var async    = require('async'),

        database = require('./database'),
        logger   = require('./logger'),
        rules    = require('./rules');

    Controller.createRule = function (payload, done) {
        async.series([
            async.apply(database.createRule, payloadToRule(payload)),
            async.apply(rules.invalidate)
        ], done);
    };

    Controller.deleteRule = function (rule, done) {
        async.series([
            async.apply(database.deleteRule, rule.rid),
            async.apply(rules.invalidate)
        ], function (error) {
            if (error) {
                return done(error);
            }

            done(null, rule);
        });
    };

    Controller.getAllRules = function (done) {
        database.getRules(done);
    };

    Controller.installDefaultRules = function (done) {
        var data = require('../data/default-rules');
        var installed = [];

        async.waterfall([
            async.apply(database.getRules),
            function (rules, callback) {
                var toInstall = [], i = 0, len = data.rules.length, defaultRule;

                for (i; i < len; ++i) {
                    defaultRule = data.rules[i];
                    if (isInList('name', defaultRule.name, rules)) {
                        logger.log('verbose', 'Rule "%s" is skipped. Reason: already installed', defaultRule.displayName);
                    } else {
                        toInstall.push(defaultRule);
                    }
                }

                callback(null, toInstall);
            },
            function (install, callback) {
                async.eachSeries(install, function (defaultRule, next) {
                    database.createRule(payloadToRule(defaultRule), function (error) {
                        if (error) {
                            return next(error);
                        }
                        installed.push(defaultRule);
                        next();
                    });
                }, callback);
            },
            function (callback) {
                if (installed.length > 0) {
                    rules.invalidate(callback);
                } else {
                    callback(null);
                }
            }
        ], function (error) {
            if (error) {
                return done(error);
            }

            done(null, installed.map(function (rule) {
                return rule.displayName;
            }));
        });
    };

    Controller.parseContent = function (content, done) {
        rules.parse(content, function (error, result) {
            if (error == null) {
                done(null, result);
            } else {
                done(error);
            }
        });
    };

    /**
     * Main parsing method.
     * Performs replacements on content field.
     *
     * @param {Object} payload {object} includes full post entity Payload.postData.content
     * @param {Function} done returns updated content
     */
    Controller.parsePost = function (payload, done) {
        Controller.parseContent(payload.postData.content, function (error, content) {
            if (error == null) {
                payload.postData.content = content;
                done(null, payload);
            } else {
                done(error);
            }
        });
    };

    Controller.saveRule = function (rule, done) {
        async.series({
            save: async.apply(database.updateRule, rule.rid, payloadToRule(rule)),
            rule: async.apply(database.getRule, rule.rid),
            sync: async.apply(rules.invalidate)
        }, function (error, results) {
            if (error) {
                return done(error);
            }
            done(null, results.rule)
        });
    };

    function isInList(field, value, list) {
        var i = 0, len = list.length, listItem;

        for (i; i < len; ++i) {
            listItem = list[i];

            if (listItem[field] === value) {
                return true;
            }
        }

        return false;
    }

    function payloadToRule(payload) {
        var rule = {};

        // TODO Validation?

        rule.name = payload.name;
        rule.displayName = payload.displayName;
        rule.regex = payload.regex;
        rule.replacement = payload.replacement;
        rule.icon = payload.icon || 'fa-cogs';

        return rule;
    }

})(module.exports);