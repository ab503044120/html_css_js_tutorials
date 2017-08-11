import About from './components/About.vue'
import ArticleList from './components/ArticleList.vue'
export default{
    routes:[{
        path:'/about',
        component:About
    },
    {
        path:'/article',
        component:ArticleList
    }]
}