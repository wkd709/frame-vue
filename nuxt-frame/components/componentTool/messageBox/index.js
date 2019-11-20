import Vue from "vue";
import MessageBox from "./message";

const MessageBoxConstructor = Vue.extend(MessageBox);


const MessageBoxObj = function (options) {
    let instance;
    instance = new MessageBoxConstructor({
        el: document.createElement('div'),
    });
    for (var key in options) {
        instance[key] = options[key];
    }
    instance.callBackF = callBackF;

    document.body.appendChild(instance.$el);
};

const callBackF = function (ele) {
    document.body.removeChild(ele);
};

export default MessageBoxObj;