import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import NewsDetail from '../components/NewsDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/news',
      component: News,
      children: [{
        path: ':name',
        component: NewsDetail

      }]
    },
    {
      path: '/',
      redirect: 'home'
    }
  ]
})
