# nuxt-frame

> nuxt.js frame

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

```

## 安装 @nuxtjs/router 自定义路由，根目录下添加router.js文件, 自定义路由， .vue 文件就不能放在pages文件目录下，不然会被当场nuxt默认渲染成路由，可以新建个 views 文件夹 放在下面。

```js
export default {
  modules: [
    '@nuxtjs/style-resources',
  ]
}
```


## 安装 @nuxtjs/style-resources 当您需要在页面中注入一些变量和mixin而不必每次都导入它们时，用此插件

修改 **nuxt.config.js**:
```js
export default {
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {//配置全局css函数等
    scss: './assets/**/*.scss',
    less: './assets/**/*.less',
    // sass: ...
  }
}
```

**注意：**
    内存泄漏的话  npm run fix-memory-limit  , 此命令需要 全局已安装 cross-env 和 increase-memory-limit 两个包


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
