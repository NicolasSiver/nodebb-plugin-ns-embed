/**
 * Created by Nicolas on 10/25/15.
 */
(function (Rules) {
    'use strict';

    var database = require('./database');

    var rulesList = [];

    Rules.invalidate = function (done) {
        database.getRules(function (error, rules) {
            if (error) {
                return done(error);
            }

            // Re-compile regular expressions
            rulesList = rules.map(function (rule) {
                return {
                    match      : new RegExp(rule.regex, "g"),
                    replacement: rule.replacement
                };
            });
            done();
        });
    };

    Rules.parse = function (content, done) {
        var i = 0, len = rulesList.length, rule;

        for (i; i < len; ++i) {
            rule = rulesList[i];
            content = content.replace(rule.match, rule.replacement);
        }

        done(null, content);
    };

})(module.exports);