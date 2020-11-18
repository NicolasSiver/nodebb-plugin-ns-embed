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

    Filters.parseRaw = function (payload, callback) {
        controller.parseContent(payload, callback);
    };

    // Fix allowed attributes for some elements. NodeBB sanitizes them otherwise.
    // See NodeBB's default sanitizer config at: https://github.com/NodeBB/NodeBB/blob/master/src/posts/parse.js
    Filters.configSanitizer = function (payload, callback) {
        payload.allowedAttributes.iframe.push('allowfullscreen', 'frameborder');
        callback(null, payload);
    };

})(module.exports);