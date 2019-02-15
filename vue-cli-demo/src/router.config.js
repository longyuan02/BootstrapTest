import Home from './components/Home.vue'
import News from './components/News.vue'

export default { //输出
  routes: [{
      path: '/home',
      component: Home
    },
    {
      path: '/News',
      component: News
    }
  ]
}
