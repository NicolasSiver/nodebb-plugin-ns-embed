const path = require('path');

module.exports = env => {
    return {
        entry : "./index.js",
        mode  : env.production === true ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use : {
                        loader : 'babel-loader',
                        options: {
                            exclude: /node_modules/,
                            presets: ['@babel/preset-react']
                        }
                    }
                }
            ]
        },
        output: {
            path         : path.resolve(__dirname, '../../public/js'),
            filename     : "acp.js",
            libraryTarget: "amd",
            library      : "admin/plugins/embed"
        },
    };
};
