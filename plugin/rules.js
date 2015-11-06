/**
 * Created by Nicolas on 10/25/15.
 */
(function (Rules) {
    'use strict';

    var database = require('./database'),
        logger   = require('./logger'),
        nodebb   = require('./nodebb');

    var cache = nodebb.cache;

    var rulesList = [];

    Rules.invalidate = function (done) {
        database.getRules(function (error, rules) {
            if (error) {
                return done(error);
            }

            logger.log('verbose', 'Updating rules...');

            // Re-compile regular expressions
            rulesList = rules.map(function (rule) {
                return {
                    match      : new RegExp(rule.regex, "g"),
                    replacement: rule.replacement
                };
            });

            cache.reset();

            logger.log('verbose', 'Updating rule list, total rules: %d', rulesList.length);

            done();
        });
    };

    Rules.parse = function (content, done) {
        if (content) {
            var i = 0, len = rulesList.length, rule;

            for (i; i < len; ++i) {
                rule = rulesList[i];
                content = content.replace(rule.match, rule.replacement);
            }

            done(null, content);
        } else {
            done(null, content);
        }
    };

})(module.exports);