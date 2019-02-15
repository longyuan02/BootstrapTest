import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config'
import axios from 'axios'

//使用vue-router 
Vue.use(VueRouter);
//创建路由
const router = new VueRouter(routerConfig);
//全局Vue对象想中添加 可以使每个vue实例都可以使用
Vue.prototype.$http=axios;
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
