import * as types from "../action-types";

export default  function (state = {open:false},action) {
    if (action.type == types.LEFT_MENU) {
        state.open = action.text;
    }
    return Object.assign({},state,state);
}