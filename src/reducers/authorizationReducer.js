import { SUCCESSFUL_LOGIN, SUCCESSFUL_LOGOUT } from '../actions/types'

const initialState = {

    isLoggedIn: false,
    role: 'GUEST'
}

export default function(state = initialState, action){
    switch (action.type) {
        case SUCCESSFUL_LOGIN:
            return {
                isLoggedIn: true,
                role: action.payload.role
            }

        case SUCCESSFUL_LOGOUT:
            return {
                isLoggedIn: false,
                role: action.payload.role
            }

        default:
            return state
    }
}