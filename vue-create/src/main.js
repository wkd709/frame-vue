import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

// axios
var instance = axios.create({
  timeout: 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
Vue.prototype.$http = instance

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

let routerList = ['/', '/about', '/page/1','/sss'];

router.beforeEach((to, from, next) => {//to:即将要进入的目标 路由对象  from: 当前导航正要离开的路由
  //排除此时地址 = 转向的地址 的情况，避免dead loop  进入死循环
  to.matched.length != 0 && (routerList.indexOf(to.path) != -1 || to.path == '/404') ? next() : next({path: '/404'});
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
