<template>
  <div class="container">
    <div>
      <h3 class="title">
        nuxt-frame
      </h3>
      <h3 class="subtitle">
        nuxt.js frame
      </h3>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: '',
      meta: [
        { hid: "keywords", name: "keywords", content: '' },
        { hid: "description", name: "description", content: '' }
      ]
    };
  },
  // async asyncData(context) {
  //   return Promise.all([
  //   ])
  //   .then(res=>{
  //     return {
  //     }
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //     return {
       
  //     }
  //   });
  // },
  mounted: function() {
    // this.$loading(true);
  },
}
</script>

<style lang='scss'>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 30px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
}
</style>