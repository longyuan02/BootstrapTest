<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h3>
      <router-link to="/home">主页</router-link>
      <router-link to="/news">新闻</router-link>
    </h3>
    <hr>
    <button @click="send">发送Ajax请求</button>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
//引入axios
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your First Vue.js App"
    };
  },
  methods: {
    send() {
      //设置全局请求
      this.$http.get("https://api.github.com/users/" + 'longyuan02').then(rsp => {
        console.log(rsp.data);
        this.getUser = rsp.data.node_id;
        this.message = rsp.data; //空json接收
      });
    }
  },
  mounted() {
    console.log(this.$route);
  },
  watch: {
    $route: function(newValue, oldValue) {
      console.log("路由发生变化 跳转到:" + newValue.path);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
