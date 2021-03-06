import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/iconfont/iconfont.css'
import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  router,
  $,
  render: h => h(App)
}).$mount('#app')
