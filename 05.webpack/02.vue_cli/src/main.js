import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.js'
Vue.use(VueRouter);
var router = new VueRouter(routes);
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
