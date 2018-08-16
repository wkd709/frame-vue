const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const opn = require('opn');
const path = require('path');

const app = express();
var webpackConfig = require('./webpack.dev.js');
var compiler = webpack(webpackConfig);

// 设置本地服务器端口号
var dev = {
  port: 8010,
}
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.use(devMiddleware);

app.use(hotMiddleware);

var _resolve;

var readyPromise = new Promise(resolve => {
  _resolve = resolve
})


var staticPath = path.posix.join('/', 'static')
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + dev.port;

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('\n > Listening at ' + uri + '\n')
  opn(uri)
  _resolve()
})

var server = app.listen(dev.port);
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}