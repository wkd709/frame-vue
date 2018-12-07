/*
**  合并reducers
*/
import { combineReducers } from 'redux';

import test from './test';
import left from './leftMenuReducer';

const reducer = combineReducers({
    test,
    left
})

export default reducer;