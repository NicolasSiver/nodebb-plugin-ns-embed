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

    Controller.getAllRules = function (done) {
        database.getRules(done);
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