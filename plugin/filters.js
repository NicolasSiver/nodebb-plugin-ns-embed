(function (Filters) {
    'use strict';

    var controller = require('./controller');

    Filters.adminHeaderBuild = function (header, callback) {
        header.plugins.push({
            route: '/plugins/embed',
            icon : 'fa-share-alt',
            name : 'Embed'
        });
        callback(null, header);
    };

    Filters.adminScripts = function (list, callback) {
        list.push('https://checkout.stripe.com/checkout.js');
        callback(null, list);
    };

    Filters.parsePost = function (payload, callback) {
        controller.parsePost(payload, callback);
    };

})(module.exports);