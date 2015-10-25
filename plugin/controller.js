/**
 * Created by Nicolas on 10/21/15.
 */
(function (Controller) {
    'use strict';

    var async    = require('async'),

        database = require('./database');

    Controller.getAllRules = function (done) {
        database.getRules(done);
    };

})(module.exports);