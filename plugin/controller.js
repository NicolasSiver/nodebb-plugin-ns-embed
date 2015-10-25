/**
 * Created by Nicolas on 10/21/15.
 */
(function (Controller) {
    'use strict';

    var async    = require('async'),

        database = require('./database'),
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

    /**
     * Main parsing method.
     * Performs replacements on content field.
     *
     * @param payload {object} - includes full post entity Payload.postData.content
     * @param done returns updated content
     */
    Controller.parsePost = function (payload, done) {
        rules.parse(payload.postData.content, function (error, content) {
            if (error) {
                return done(error);
            }

            payload.postData.content = content;
            done(null, payload);
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