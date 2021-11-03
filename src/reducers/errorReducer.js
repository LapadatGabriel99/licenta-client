import { GET_ERRORS } from '../actions/types'

const initialState = {
    error: {
        
    }
}

export default function(state = initialState.error, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload

        default:
            return state
    }
}