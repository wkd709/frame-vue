const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = merge(common,{
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        publicPath: '/',
        port: 8000,
        // inline:true,//设置为true，当源文件改变的时候会自动刷新
        // historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        // hot:true//允许热加载
    },
    module: {
        rules: [
        ]
    }
})