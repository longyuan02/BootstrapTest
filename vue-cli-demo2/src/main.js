// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.config.productionTip = false

/*使用vue-router */
Vue.use(VueRouter)
//创建路由
const router = new VueRouter(routerConfig);
//全局Vue对象想中添加 可以使每个vue实例都可以使用
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
