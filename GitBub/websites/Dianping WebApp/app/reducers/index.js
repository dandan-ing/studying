import { combineReducers } from 'redux'
import userinfo from 'Reducers/userinfo'
import store from 'Reducers/store'

export default combineReducers({
    userinfo,
    store
}) 