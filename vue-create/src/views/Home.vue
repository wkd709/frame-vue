<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import { fetch }  from '@/fetch/api'
export default {
  name: 'home',
  data() {
    return {
      obj: {
        document:[]
      }
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    // fetch('post','/')
    //   .then((res)=>{
    //     console.log(res);
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   });
    
    var a = [
        {id:1,num:"12"},
        {id:2,num:"13"},
        {id:3,num:"3"},
        {id:2,num:"16"},
        {id:5,num:"14"},
        {id:1,num:"14"}
      ];
    function uniq(list) {
      var obj = {};
      var temp = [];
      list.forEach(element => { 
        obj[element.id] = element;
      });

      for (var key in obj) {
        temp.push(Object.assign({},obj[key]));
      }

      temp.forEach(item=>{
        list.forEach(element => {
          if (item.id == element.id && item.num != element.num) {
            if ( typeof item.num == 'string') {
              item.num = [];
            }
            item.num.push(element);
          }
        });
      });
      console.log(temp);
    }
    uniq(a);
  },
}
</script>

<style lang="scss">
.home {
  background: #ddd;
  height: (20px/12px) * 1rem;
}
</style>