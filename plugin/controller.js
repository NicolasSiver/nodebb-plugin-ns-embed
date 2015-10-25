/**
 * Created by Nicolas on 10/21/15.
 */
(function (Controller) {
    'use strict';

    var async    = require('async'),

        database = require('./database');

    Controller.createRule = function (payload, done) {
        // FIXME Implement
        console.log(payload);
        done();
    };

    Controller.getAllRules = function (done) {
        database.getRules(done);
    };

})(module.exports);