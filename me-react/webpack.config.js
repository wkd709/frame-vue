const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var miniCssTextPlugin = require('mini-css-extract-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

function assetsPath (_path) {
    const assetsSubDirectory = 'static';
    return path.posix.join(assetsSubDirectory, _path);
}

module.exports = {
    entry: {
        main: './src/app.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'static'),
                to: 'static',
                ignore: ['.*']
            }
        ]),
        new miniCssTextPlugin({
            path: path.resolve(__dirname, 'dist'),
            filename: assetsPath('css/[name].[chunkhash].css'),
            chunkFilename: assetsPath('css/[id].[chunkhash].css')
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
              safe: true
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: [{ loader: 'babel-loader' }],
                exclude: /node_modules/,
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,//配置静态文件解析
                loader: "url-loader",
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [miniCssTextPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
}