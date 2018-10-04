import Vue from 'vue'
import * as FastClick from "fastclick"
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters' // global filters
import './permission' // permission control
import './styles/theme.styl'
import './styles/global.css'
import 'normalize.css'
FastClick.attach(document.body)
Vue.config.productionTip = false
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})



new Vue({
  el: '#app-box',
  store,
  router,
  components: {
    App
  },
  template: '<App/>',
})
