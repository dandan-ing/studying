import { CHANDE_INPUT_VALUE,ADD_TODOLIST_ITEM,DEL_TODOLIST_ITEM,INIT_TODO_LIST} from './actionTypes';

export const changeHandleAction = (value) => ({
    type: CHANDE_INPUT_VALUE,
    value
});

export const addHandleAction = () => ({
    type: ADD_TODOLIST_ITEM
})

export const delHandleAction = (index) => ({
    type: DEL_TODOLIST_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_TODO_LIST,
    data
})

