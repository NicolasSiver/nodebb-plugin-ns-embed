const async = require('async');

const database = require('./database'),
      logger   = require('./logger'),
      rules    = require('./rules'),
      Utils    = require('./utils');

(function (Controller) {

    Controller.createRule = function (payload, done) {
        async.series([
            async.apply(database.createRule, Utils.payloadToRule(payload)),
            async.apply(rules.invalidate)
        ], function (error, results) {
            if (error) {
                return done(error);
            }

            done(null, results[0]);
        });
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
        let data = require('../data/default-rules');
        let installed = [];

        async.waterfall([
            async.apply(database.getRules),
            function (rules, callback) {
                let toInstall = [], i = 0, len = data.rules.length, defaultRule;

                for (i; i < len; ++i) {
                    defaultRule = data.rules[i];

                    if (Utils.isInList('name', defaultRule.name, rules)) {
                        logger.log('verbose', 'Rule "%s" is skipped. Reason: already installed', defaultRule.displayName);
                    } else {
                        toInstall.push(defaultRule);
                    }
                }

                callback(null, toInstall);
            },
            function (install, callback) {
                async.eachSeries(install, function (defaultRule, next) {
                    database.createRule(Utils.payloadToRule(defaultRule), function (error) {
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
            save: async.apply(database.updateRule, rule.rid, Utils.payloadToRule(rule)),
            rule: async.apply(database.getRule, rule.rid),
            sync: async.apply(rules.invalidate)
        }, function (error, results) {
            if (error) {
                return done(error);
            }

            done(null, results.rule)
        });
    };

})(module.exports);
