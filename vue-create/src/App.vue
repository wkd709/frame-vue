<template>
  <div id="app">
    <div id="nav" v-if="$route.path != '/404'">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  |
      <router-link to="/page">page</router-link>   |
      <router-link :to="{name:'page',params:{id:'s'}}">page/s</router-link>  |
      <router-link :to="{name:'page',params:{id:'1'}}">page/1</router-link>  |
      <router-link  :to="{name:'page',params:{id:'2'}}">page/2</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 1,
    }
  },
  mounted () {
  },
  methods:{

  },
  metaInfo: {
    title: 'app.vue',
    titleTemplate: '%s - by vue-meta',
    htmlAttrs: {
      lang: 'zh'
    },
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: pxToRem(30px);
  // padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
