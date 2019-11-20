<template>
  <div class="error-message">
    <div class='404Page' v-if="error.statusCode === 404">
      <img src="@/assets/img/404.png" alt="404页面">
      <h2>哎呀迷路了......</h2>
      <p>您要访问的页面弄丢了</p>
    </div>
    <div class="500Page" v-else>
      <img src="@/assets/img/500.png" alt="500页面">
      <h2>bibi~~~~崩溃啦！</h2>
      <p>别担心，我带你回去</p>
    </div>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // you can set a custom layout for the error page
  head() {
    return {
      title:"",
      meta: [
        { hid: "keywords", name: "keywords", content: "" },
        { hid: "description", name: "description", content: "" }
      ]
    };
  },
}
</script>
<style lang="scss">
.error-message {
  text-align: center;
  padding-top: 4rem;
  h2 {
    line-height: 5rem;
    font-size: 2rem;
    color: #666;
  }
  p {
    line-height: 2rem;
    font-size: 1.5rem;
    color: #666;
  }
  a {
    display: block;
    width: 10rem;
    line-height: 3rem;
    height: 3rem;
    border-radius: 1rem;
    text-align: center;
    color: #fff;
    background: #c63b3b;
    font-size: 1.5rem;
    margin: 2rem auto;
  }
}
</style>