import { SUCCESSFUL_LOGIN, SUCCESSFUL_LOGOUT } from '../actions/types'

const initialState = {

    isLoggedIn: false,
}

export default function(state = initialState, action){
    switch (action.type) {
        case SUCCESSFUL_LOGIN:
            return {
                isLoggedIn: true,
            }

        case SUCCESSFUL_LOGOUT:
            return {
                isLoggedIn: false,
            }

        default:
            return state
    }
}