import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/',
      redirect: 'login'
    }
  ]
})
