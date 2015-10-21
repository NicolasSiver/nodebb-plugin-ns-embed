(function (Sockets) {
    'use strict';

    var constants  = require('./constants'),
        controller = require('./controller'),
        nodebb     = require('./nodebb');

    var adminSockets  = nodebb.adminSockets,
        serverSockets = nodebb.serverSockets,
        emitNamespace = 'admin.plugins.' + constants.SOCKET_NAMESPACE + '.';

    Sockets.init = function (callback) {
        adminSockets[constants.SOCKET_NAMESPACE] = {};

        //Acknowledgements
        adminSockets[constants.SOCKET_NAMESPACE].embedRulesGet = Sockets.embedRulesGet;

        callback();
    };

    Sockets.embedRulesGet = function (socket, payload, callback) {
        controller.getAllRules(callback);
    };

    Sockets.emit = function (eventName, payload) {
        serverSockets.emit(emitNamespace + eventName, payload);
    };

})(module.exports);