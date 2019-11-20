<template>
  <div class="loading-box">
    <div class='box'>
      <img src="@/assets/img/loading.gif" alt />
      <p>loading...</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: Boolean
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  beforeMount: function() {},
  mounted: function() {
  }
};
</script>
<style lang="scss" >
@function pxToRem($px) {
  @return ($px/12px) * 1rem;
}
.loading-box {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  .box {
    width: pxToRem(120px);
    height: pxToRem(90px);
    border-radius: pxToRem(5px);
    padding: pxToRem(10px) 0;
    text-align: center;
    background: #000;
    opacity: 0.7;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: pxToRem(-60px);
    margin-top: pxToRem(-45px);
    img {
      width: pxToRem(60px);
      height: pxToRem(60px);
    }
    p {
      color: #fff;
      font-size: pxToRem(18px);
    }
  }
}
</style>