/**
 * Created by Nicolas on 10/21/15.
 */
module.exports = {
    entry       : "./index.js",
    output      : {
        path    : "../../public/js",
        filename: "acp.js"
    },
    externals   : {
        "app"           : "app",
        "jquery"        : "jQuery",
        "socket"        : "socket",
        "templates"     : "templates",
        "StripeCheckout": "StripeCheckout"
    },
    module      : {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    watchOptions: {
        poll: 1000
    }
};