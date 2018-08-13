import {CHANDE_INPUT_VALUE, ADD_TODOLIST_ITEM, DEL_TODOLIST_ITEM} from './store/actionTypes';

const defaultState = {
    inputValue:'',
    list:[]
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case CHANDE_INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case ADD_TODOLIST_ITEM:
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState; 
        case DEL_TODOLIST_ITEM:
            newState.list.splice(action.index, 1);
            return newState; 
        default:
            return state;
    }
}