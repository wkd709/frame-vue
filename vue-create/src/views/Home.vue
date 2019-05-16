<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { fetch }  from '@/fetch/api'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    fetch('post','/')
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      });
  },
}
</script>

<style lang="scss">
.home {
  background: #ddd;
  height: (20px/12px) * 1rem;
}
</style>