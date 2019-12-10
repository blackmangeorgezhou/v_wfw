import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: '主页',
      component: HomePage
    },
    {
      path: '',
      redirect: '/home'
    }
  ]
})
