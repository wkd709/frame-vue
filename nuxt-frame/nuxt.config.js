
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin');
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { hid: 'keywords', name: 'keywords', content: process.env.author || '' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { charset: 'utf-8' },
      { name:'format-detection',content:'telephone=no' },
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#de2013',
    height: '2px'
  },
  /*
  ** Global CSS
  */
  css: [
    {src:'@/assets/css/common.scss',lang:'scss'},
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:"@/plugins/pluginCommon",ssr: true},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/router' //此插件可以用自定义路
  ],
  router: {
    prefetchLinks: false,
  },
  render: {
    bundleRenderer: {
      shouldPrefetch: (file, type) => {
        return false;
      },
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type);
      }
    },
    resourceHints: false
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: { allChunks: true },
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[name].[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[name].[chunkhash].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
    },
    Parallel: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    splitChunks:{
      layouts: false,
      pages: false,
      commons: false,
      assets: false
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            warnings: false,
            compress: {
              drop_console: process.env.NODE_ENV !== 'production' ? false : true, // 可选：false,生产移除 console.log
              pure_funcs: process.env.NODE_ENV !== 'production' ? [] : ['console.log']
            },
            output: {
              // 是否保留代码注释
              comments: false
            },
            cache: true,
            parallel: true,
            // Must be set to true if using source-maps in production
            sourceMap: process.env.NODE_ENV !== 'production'
          }
        }),
      ],
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: true,
        cacheGroups: {
          common: {
            test: /\.js$/,
            name: "commons",
            priority: 20,
            enforce: true,
            chunks: "all",
            minChunks: 7,
          },
          venders: {
            test: /node_modules/,
            name: 'vendors',
            chunks: 'all'
          },
        },
      },
    },
    vernder: ['jquery', 'axios', 'qs', 'echart', 'vue-clipboard2'],
    plugins:[
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "window.jQuery":"jquery"
      }),
    ],
  },
  server:{
    port: 3000,
    host: 'localhost' //'localhost'
  }
}
