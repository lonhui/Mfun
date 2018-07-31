import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import rule from '@/pages/rule'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{ keepAlive: true }
    },
    {
      path: '/rule',
      name: 'rule',
      component: rule,
      meta:{ keepAlive: true }
    }
  ]
})
