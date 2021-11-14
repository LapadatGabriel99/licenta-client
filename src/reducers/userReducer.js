import  { GET_USER_DETAILS, REFRESH_USER } from '../actions/types'

const initialState = {

    id: '',
    username: '',
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DETAILS:
            return action.payload

        case REFRESH_USER:
            return action.payload

        default:
            return state;
    }
}