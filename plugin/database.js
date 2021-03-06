(function (Database) {
    'use strict';

    const async = require('async');

    const nodebb    = require('./nodebb'),
          constants = require('./constants');

    const db = nodebb.db;

    Database.createRule = function (data, done) {
        async.waterfall([
            async.apply(db.incrObjectField, 'global', constants.COUNTER),
            function (id, next) {
                let createTime = Date.now();
                let additionalData = {
                    rid       : id,
                    createtime: createTime
                };
                let ruleData = Object.assign({}, data, additionalData);

                async.parallel([
                    async.apply(db.sortedSetAdd, constants.NAMESPACE + ':rule', createTime, id),
                    async.apply(db.setObject, constants.NAMESPACE + ':rule:' + id, ruleData)
                ], function (error) {
                    if (error) {
                        return next(error);
                    }
                    next(null, ruleData);
                });
            }
        ], done);
    };

    Database.deleteRule = function (id, done) {
        async.parallel([
            async.apply(db.delete, constants.NAMESPACE + ':rule:' + id),
            async.apply(db.sortedSetRemove, constants.NAMESPACE + ':rule', id)
        ], function (error) {
            if (error) {
                return done(error);
            }
            //Filter null responses from DB delete methods
            done(null);
        });
    };

    Database.getRule = function (id, done) {
        db.getObject(constants.NAMESPACE + ':rule:' + id, done);
    };

    Database.getRules = function (done) {
        async.waterfall([
            async.apply(db.getSortedSetRange, constants.NAMESPACE + ':rule', 0, -1),
            function (ids, next) {
                if (!ids.length) {
                    return next(null, ids);
                }
                db.getObjects(ids.map(function (id) {
                    return constants.NAMESPACE + ':rule:' + id;
                }), next);
            }
        ], done);
    };

    Database.updateRule = function (id, data, done) {
        db.setObject(constants.NAMESPACE + ':rule:' + id, data, done);
    };

})(module.exports);
