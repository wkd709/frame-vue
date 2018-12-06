import * as types from "../action-types";
export default  function (state = { lists: [{text:'li'}],newType:'all'}, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return Object.assign({}, state, {...state,lists:[...state.lists,{text:action.text}]});
        case types.TOGGLE_TODO:
            state.lists.map((key,index)=>{
                if(action.index == index){
                    key.completed = true;
                } else {
                    key.completed = false;
                }
            })
            return Object.assign({}, state, {state});
        case types.DEL_TODO:
            state.lists.splice(action.index, 1);
            return Object.assign({}, state, {state});
        default:
            return state;
    }
}