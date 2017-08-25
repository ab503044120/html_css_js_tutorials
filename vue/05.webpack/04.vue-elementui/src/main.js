// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'
import ElementUI from 'element-ui'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
console.log(router)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
