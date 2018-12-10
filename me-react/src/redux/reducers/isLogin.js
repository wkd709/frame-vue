import * as types from "../action-types";
import {storage} from '../../tools/localstorage';

export default  function (state={user:''},action) {
    // if (action.type == types.LOGIN_STATUS) {
    //     state.user = action.text;
    // }
    var name = storage.get('name');
    if (name) {
        state.user = name;
    } else {
        state.user = '';
    }
    return Object.assign({},state,state);
}