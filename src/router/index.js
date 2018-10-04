import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import home from '@/components/home'

const HelloWorld = () => import('@/components/HelloWorld').then(m => m.default)
const home = () => import('@/page/home').then(m => m.default)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
