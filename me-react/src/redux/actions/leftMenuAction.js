import * as types from "../action-types";

export default {
    left_menu_show(text){
        return { type: types.LEFT_MENU, text: text}
    },
}