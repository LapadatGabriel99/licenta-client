import { POST_TEST_ANSWERS, GET_SCORED_TESTS, GET_SCORED_TEST, UPDATE_SCORED_TEST } from '../actions/types'

const initialState = {
    scoredTests: [],
    scoredTest: {}
}

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_SCORED_TESTS:
            return {
                ...state,
                scoredTests: action.payload
            }

        case GET_SCORED_TEST:
            return {
                ...state,
                scoredTest: action.payload
            }

        case UPDATE_SCORED_TEST: 
            return {
                ...state,
                scoredTest: action.payload
            }

        default:
            return state;
    }
}