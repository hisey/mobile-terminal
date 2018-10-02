import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
=======
import home from '@/components/home'
>>>>>>> da9b2a2c5b0e5eb79868c3635c622b262b6713bb

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'HelloWorld',
      component: HelloWorld
=======
      name: 'home',
      component: home
>>>>>>> da9b2a2c5b0e5eb79868c3635c622b262b6713bb
    }
  ]
})
