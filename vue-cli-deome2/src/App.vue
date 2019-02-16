<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/home">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelleWorld from './components/HelloWorld'
export default {
  name: 'App',
  methods: {
  },
  components:{
    // HelleWorld,
    // mybutton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
