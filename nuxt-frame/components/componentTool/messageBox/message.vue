<template>
  <div class="message-box">
    <div class="box">
      <p>{{text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "message-box",
  props: {
    text: {
      default: "提示信息"
    }
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  beforeMount: function() {},
  mounted: function() {
    const self = this;
    setTimeout(() => {
      self.callBackF(self.$el); 
    }, 1500);
  }
};
</script>
<style lang="scss" >
@function pxToRem($px) {
  @return ($px/12px) * 1rem;
}
.message-box {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  .box {
    width: pxToRem(160px);
    max-height: pxToRem(90px);
    border-radius: pxToRem(5px);
    padding: pxToRem(10px);
    text-align: center;
    background: #000;
    opacity: 0.9;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: pxToRem(-90px);
    p {
      color: #fff;
      font-size: pxToRem(18px);
    }
  }
}
</style>
