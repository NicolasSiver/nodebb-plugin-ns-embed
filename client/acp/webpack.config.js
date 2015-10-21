/**
    * Created by Nicolas on 10/21/15.
    */
module.exports = {
    entry    : "./index.js",
    output   : {
        path    : "../../public/js",
        filename: "acp.js"
    },
    externals: {
        "jquery"   : "jQuery",
        "socket"   : "socket",
        "templates": "templates"
    },
    module   : {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};