const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function assetsPath (_path) {
    const assetsSubDirectory = 'static';
    return path.posix.join(assetsSubDirectory, _path);
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
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
        ]
    }
})