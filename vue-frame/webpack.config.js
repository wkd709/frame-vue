var path = require('path');
const webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');



function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: {
      index:  './src/index.js',
      vendor: [
        'lodash'
      ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve(__dirname, 'src'),
          "@img": path.resolve(__dirname, 'static/images'),
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HashedModuleIdsPlugin(),
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            
        ]
    }
};