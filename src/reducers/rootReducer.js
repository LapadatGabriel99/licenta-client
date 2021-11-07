import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import { CLEAR_ALL_DATA } from "../actions/types";
import authenticationReducer from "./authenticationReducer";

const appReducer = combineReducers({
    error: errorReducer,
    authenticationReducer: authenticationReducer
})

const emptyState = {
    error: {},
    authenticationReducer: {
        id: '',
        username: ''
    },
}

const rootReducer = (state, action) => {

    if (action.type === CLEAR_ALL_DATA) {

        state = emptyState
    }

    return appReducer(state, action)
}

export default rootReducer