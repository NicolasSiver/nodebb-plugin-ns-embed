(function (Filters) {
    'use strict';

    let controller = require('./controller');

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

    // Full list of the attributes: https://github.com/NodeBB/NodeBB/blob/21c992242e1219c8d726ddc5b3b661adc9fd44c2/src/posts/parse.js#L21
    Filters.sanitizeConfig = function (payload, callback) {
        let iframeConfig = payload.allowedAttributes.iframe;

        iframeConfig.push('allowfullscreen');
        iframeConfig.push('frameborder');
        callback(null, payload);
    };

})(module.exports);
