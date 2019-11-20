import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 异步加载路由
function interopDefault(promise) {
  return promise.then(m => {
    return m.default || m
  })
}

const home = () => interopDefault(import('./views/index.vue'));

let routes = [{
    path: '/',
    name: 'home',
    component: home,
  }
];

//合并路由的方法
let arrayMerge = function () {
  return Array.prototype.concat.apply([], arguments);
};

export function createRouter() {
  return new Router({
    mode: 'history',
    //切换页面时，页面滑动到顶部
    scrollBehavior: function (to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    },
    routes: arrayMerge(routes)
  })
};