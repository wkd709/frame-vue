import Vue from "vue";
import loading from "./loading";

const loadingConstructor = Vue.extend(loading);
let instance;

const loadingObj = function (type) {
  if (type) {
    instance = new loadingConstructor({
      el: document.createElement('div'),
    });
    instance.type = type;
    document.body.appendChild(instance.$el);
  } else {
    if (instance) document.body.removeChild(instance.$el);
    instance = null;
  }
};
export default loadingObj;