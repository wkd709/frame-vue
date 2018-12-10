/*
**  合并reducers
*/
import { combineReducers } from 'redux';

import test from './test';
import left from './leftMenuReducer';
import prompt from './promptReducer';
import isLogin from './isLogin';

const reducer = combineReducers({
    test,
    left,
    prompt,
    isLogin
})

export default reducer;