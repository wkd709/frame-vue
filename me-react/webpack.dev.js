const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common,{
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),//服务器从哪里提供内容
        publicPath: '/',
        port: 8000,
        // host: '192.168.2.153',//指定要使用的主机。默认情况下这是localhost
        compress: true,//启用gzip压缩
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        hot:true,//允许热加载 webpack.HotModuleReplacementPlugin完全启用HMR是必需的。
        // open: true,//打开浏览器
        // noInfo: true,//启动时所显示和之后的每个像的WebPack束信息消息保存，将被隐藏。错误和警告仍将显示。
        stats:'minimal',//精确控制显示的捆绑信息,不想使用quiet或者noInfo , 'minimal' 仅在发生错误或新编译时输出
        // proxy: { //只是本地启动时 所以一般不这样显示
        //     '/api': 'http://localhost:3000'// 例如：/api/users现在请求将请求代理到的请求http://localhost:3000/api/users
        // },
    },
    module: {
        rules: [
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
})