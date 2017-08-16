import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Readme from '../components/pages/Readme'
import ANDROID from '../components/pages/ANDROID'
import IOS from '../components/pages/IOS'
import OTHER from '../components/pages/OTHER'
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
    },
    {
      path: '/home',
      component: Home,
      children: [{
        path: 'readme',
        component: Readme
      }, {
        path: 'ANDROID',
        component: ANDROID
      }, {
        path: 'IOS',
        component: IOS
      }, {
        path: 'OTHER',
        component: OTHER
      }, {
        path: '',
        redirect: 'readme'
      }]
    }
  ]
})
