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
        adminSockets[constants.SOCKET_NAMESPACE].defaultRulesInstall = Sockets.defaultRulesInstall;
        adminSockets[constants.SOCKET_NAMESPACE].embedRulesGet = Sockets.embedRulesGet;
        adminSockets[constants.SOCKET_NAMESPACE].ruleCreate = Sockets.ruleCreate;
        adminSockets[constants.SOCKET_NAMESPACE].ruleDelete = Sockets.ruleDelete;
        adminSockets[constants.SOCKET_NAMESPACE].ruleSave = Sockets.ruleSave;

        callback();
    };

    Sockets.defaultRulesInstall = function (socket, payload, callback) {
        controller.installDefaultRules(callback);
    };

    Sockets.embedRulesGet = function (socket, payload, callback) {
        controller.getAllRules(callback);
    };

    Sockets.emit = function (eventName, payload) {
        serverSockets.emit(emitNamespace + eventName, payload);
    };

    Sockets.ruleCreate = function (socket, payload, callback) {
        controller.createRule(payload, callback);
    };

    Sockets.ruleDelete = function (socket, payload, callback) {
        controller.deleteRule(payload, callback);
    };

    Sockets.ruleSave = function (socket, payload, callback) {
        controller.saveRule(payload, callback);
    };

})(module.exports);