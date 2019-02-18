<template>
  <div>
    <p>首页信息</p>
    <input type="text" v-model="uid">
    <!-- 调用根组件事件 -->
    <MyButton @click.native="send(uid)"></MyButton>
  </div>
</template>

<script>

export default {
data() {
    return {
        uid:''
    }
},
methods: {
    send(uid){
      this.$httpTo.get("https://api.github.com/users/" + uid).then(rsp => {
        console.log(rsp.data);
        this.$routerIfo.push({
            path: '/success'
        });
        // this.getUser = rsp.data.node_id;
        // this.message = rsp.data; //空json接收
        //成功跳转
      });
    },
},
components:{
  }
}
</script>

<style>
</style>
