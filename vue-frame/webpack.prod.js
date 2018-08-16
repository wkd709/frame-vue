const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function assetsPath (_path) {
    const assetsSubDirectory = 'static';
    return path.posix.join(assetsSubDirectory, _path)
}

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: assetsPath('js/[id].[chunkhash].js')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html'),
            chunks:['index'],
            inject: true,
        }),
        new UglifyJSPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
        }),
        new MiniCssExtractPlugin({
            filename: assetsPath('css/app.[chunkhash].css'),
            chunkFilename: assetsPath('css/app.[chunkhash].css')
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'static'),
                to: 'static',
                ignore: ['.*']
            }
        ]),
       new OptimizeCSSAssetsPlugin({})
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    loader: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
});