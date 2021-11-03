import { LOGIN, LOGOUT, REGISTER } from '../actions/types'

const initialState = {

    id: '',
    username: '',
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return action.payload

        case REGISTER:
            return action.payload

        case LOGOUT:
            return {
                id: '',
                username: ''
            }
        
        default:
            return state
    }
}