import * as actionTypes from 'Constants/userinfo'

const initalState = {};
export default function userinfo(state=initalState, action) {

    switch(action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data;
        default:
            return state;
    }
}