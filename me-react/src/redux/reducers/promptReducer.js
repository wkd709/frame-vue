import * as types from "../action-types";

export default  function (state={error:''},action) {
    if (action.type == types.PROMPT_ERR) {
        state.error = action.text;
    }
    return Object.assign({},state,state);
}