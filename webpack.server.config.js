const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');
const globalRequire = require('./package.json');

const webpackConfig = merge(baseWebpackConfig, {
    target: 'node',
    mode: process.env.NODE_ENV,
    entry: './src/entry-server.js',
    devtool: false,
    output: {
        path: path.resolve(__dirname, './dist/private'),
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs2'
    },
    externals: Object.keys(globalRequire.dependencies),
    plugins: [
        new webpack.DefinePlugin({
            'process.env': 'production'
        })
    ]
});
module.exports = webpackConfig;
