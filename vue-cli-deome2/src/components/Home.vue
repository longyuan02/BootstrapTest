<template>
    <div>
        <h3>主页页面</h3>
        <input type="text" v-model="uid">
        <button @click="sends(uid)">发送请求</button>
        <!-- .native --事件修饰符   调用根级元素事件  -->
        <mybutton @click.native="sends(uid)"></mybutton>
    </div>
</template>

<script>
import mybutton from './MyButton'
export default {
data() {
    return {
        uid:''
    }
},
methods: {
    sends(uid){
      this.$http.get("https://api.github.com/users/" + uid).then(rsp => {
        console.log(rsp.data);
        this.getUser = rsp.data.node_id;
        this.message = rsp.data; //空json接收
      });
    },
},
components:{
    mybutton
  }
}
</script>

<style>

</style>
