const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


/**
 * In this project, each page is an entry point for webpack.
 * This function finds all pages and their paths dynamically
 * to build the "entry" object necessary for the webpack config.
 */
function findEntryPages() {
    const entries = {};
    const files = fs.readdirSync(path.resolve('src/pages'));
    files.forEach((file) => {
        const entryName = path.basename(file, '.js');
        const fullPath = path.resolve(`src/pages/${file}`);
        entries[entryName] = fullPath;
    });
    return entries;
}


module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: findEntryPages(),
    devtool: 'inline-cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, './dist/public'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        sass: [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],

    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendors'
        }
    }
};


if (process.env.NODE_ENV === 'production') {

    module.exports.devtool = '#source-map';

    module.exports.optimization.minimize = true;

    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}


if (process.env.NODE_ENV === 'test') {
    // module.exports.externals = [require('webpack-node-externals')()];
    module.exports.devtool = 'inline-cheap-module-source-map';
    module.exports.mode = 'development';
    module.exports.module.rules.push({
        test: /.(s)?css$/, loader: 'null-loader'
    });
} else {
    module.exports.module.rules = module.exports.module.rules.concat([
        {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.sass$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader?indentedSyntax'
            ]
        }
    ]);
}
