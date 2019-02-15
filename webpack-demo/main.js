/**
 * 使用ES6语法引入模块
 */

import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render: function () {//使用render函数渲染组件
        return h(App);
    }
});