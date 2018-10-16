const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }],
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,//配置静态文件解析
                loader: "url-loader",
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
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
    ],
}