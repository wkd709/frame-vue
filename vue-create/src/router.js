import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/page/:id',
      name: 'page',
      component: () => import('./views/page.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./views/404.vue')
    },
  ]
})