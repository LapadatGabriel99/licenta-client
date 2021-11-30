import  { GET_USER_DETAILS, REFRESH_USER, UPDATE_USER_DETAILS } from '../actions/types'

const initialState = {

    id: '',
    username: '',
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DETAILS:
            return {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname
            }

        case REFRESH_USER:
            return {
                id: action.payload.id,
                username: action.payload.username
            }
        
        case UPDATE_USER_DETAILS:
            return {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname
            }

        default:
            return state;
    }
}