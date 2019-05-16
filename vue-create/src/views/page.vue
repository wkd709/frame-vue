<template>
  <div class="page">
    <h1>page頁面</h1>
  </div>
</template>

<script>
export default {
  name: 'page',
  mounted() {
    // console.log(this.$route,'page页面');
  }
}
</script>

<style lang="scss">
.page {
  background: #ddd;
  height: (20px/12px) * 1rem;
}
</style>