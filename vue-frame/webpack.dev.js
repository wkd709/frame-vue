const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    loader: [
                        'css-loader',
                        'sass-loader'
                    ]
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
});