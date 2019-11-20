import messageBox from "./messageBox";
import loading from "./loading/index.js";

export default (Vue) => {
    //注入 dialog 到 vue 原型上面
    Vue.prototype.$messageBox = messageBox;
    Vue.prototype.$loading = loading;
}