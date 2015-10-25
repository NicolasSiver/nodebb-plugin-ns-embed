/**
 * Created by Nicolas on 10/25/15.
 */
(function (Module) {
    'use strict';

    var winston = require('winston');

    Module.exports = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)({
                colorize : true,
                timestamp: function () {
                    var date = new Date();
                    return date.getDate() + '/' + (date.getMonth() + 1) + ' ' + date.toTimeString().substr(0, 5) + ' [' + global.process.pid + ']';
                },
                level    : global.env === 'production' ? 'info' : 'verbose',
                label    : 'plugins/embed'
            })
        ]
    });

})(module);