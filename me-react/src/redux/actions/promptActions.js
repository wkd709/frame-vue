import * as types from "../action-types";

export default {
    promptFun(text){
        return { type: types.PROMPT_ERR, text: text}
    },
}