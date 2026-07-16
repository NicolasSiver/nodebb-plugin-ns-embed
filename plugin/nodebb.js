(function (Module) {
    'use strict';

    Module.exports = {
        adminSockets : nodebb.require('./src/socket.io/admin').plugins,
        cache        : nodebb.require('./src/posts/cache'),
        db           : nodebb.require('./src/database'),
        groups       : nodebb.require('./src/groups'),
        meta         : nodebb.require('./src/meta'),
        pluginSockets: nodebb.require('./src/socket.io/plugins'),
        postTools    : nodebb.require('./src/posts/tools'),
        serverSockets: nodebb.require('./src/socket.io').server.sockets,
        settings     : nodebb.require('./src/settings'),
        socketIndex  : nodebb.require('./src/socket.io/index'),
        topics       : nodebb.require('./src/topics'),
        user         : nodebb.require('./src/user'),

        utils  : nodebb.require('./src/utils'),
        helpers: nodebb.require('./src/controllers/helpers'),

        /**
         * List is incomplete
         *
         * base_dir: '/path/to/NodeBB',
         * themes_path: '/path/to/NodeBB/node_modules',
         * views_dir: '/path/to/NodeBB/public/templates',
         * version: 'NodeBB Version',
         * url: 'http://localhost:4567',
         * core_templates_path: '/path/to/NodeBB/src/views',
         * base_templates_path: '/path/to/NodeBB/node_modules/nodebb-theme-vanilla/templates',
         * upload_path: '/public/uploads',
         * relative_path: '',
         * port: '4567',
         * upload_url: '/uploads/',
         * theme_templates_path: '/path/to/NodeBB/node_modules/nodebb-theme-lavender/templates',
         * theme_config: '/path/to/NodeBB/node_modules/nodebb-theme-lavender/theme.json',
         * NODE_ENV: 'development'
         */
        nconf   : nodebb.require('nconf'),
        passport: nodebb.require('passport'),
        express : nodebb.require('express')
    };
})(module);
