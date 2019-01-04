'use strict';

const webpack = require('webpack');
const path = require('path');

let config = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },

    module: {
        rules: [
          {
            test: [ /\.vert$/, /\.frag$/ ],
            use: 'raw-loader'
          }
        ]
    },
    devtool:"cheap-module-eval-source-map",
    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

};
//
// if(config.mode === "development"){
//             config.devtool="cheap-module-eval-source-map";
// }
module.exports = config;
