import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config'

//使用vue-router 
Vue.use(VueRouter);
//创建路由
const router = new VueRouter(routerConfig);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
