import * as types from "../action-types";
import {storage} from '../../tools/localstorage';

export default {
    LoginFun(text){
        storage.set('name',text);
        return { type: types.LOGIN_STATUS, text: text};
    },
}