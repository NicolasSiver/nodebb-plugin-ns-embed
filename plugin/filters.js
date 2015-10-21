(function (Filters) {
    'use strict';

    Filters.adminHeaderBuild = function (header, callback) {
        header.plugins.push({
            route: '/plugins/embed',
            icon : 'fa-share-alt',
            name : 'Embed'
        });
        callback(null, header);
    };

})(module.exports);