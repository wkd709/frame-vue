import Vue from 'vue'
import gcs from "@/components/componentTool/index.js" //
import plugin from "./plugin.js" //公共的js方法
// import clipboard2 from 'vue-clipboard2' //粘贴复制
// let echarts = require('echarts/lib/echarts'); //echart
// require('echarts/lib/chart/bar'); //echart 树状图

export default () => {
//   Vue.prototype.$echarts = echarts;
//   Vue.use(clipboard2);
  Vue.use(gcs);
  Vue.use(plugin);
}