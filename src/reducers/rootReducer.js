import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import { CLEAR_ALL_DATA } from "../actions/types";
import authenticationReducer from "./authenticationReducer";
import testReducer from "./testReducer";
import categoryReducer from "./categoryReducer";
import questionReducer from "./questionReducer";
import answerReducer from "./answerReducer";
import userReducer from "./userReducer";
import authorizationReducer from "./authorizationReducer";
import scoredTestReducer from "./scoredTestReducer";

const appReducer = combineReducers({
    error: errorReducer,
    user: userReducer,
    authentication: authenticationReducer,
    authorization: authorizationReducer,
    test: testReducer,
    category: categoryReducer,
    question: questionReducer,
    answer: answerReducer,
    scoredTest: scoredTestReducer
})

const emptyState = {
    error: {},
    user: {
        id: '',
        username: ''
    },
    authentication: {
        id: '',
        username: ''
    },
    authorization: {
        isLoggedIn: false,
        role: 'GUEST'
    },
    test: {
        tests: [],
        test: {}
    },
    category: {
        categories: [],
        category: {}
    },
    question: {
        questions: [],
        question: {}
    },
    answer: {
        answers: [],
        answer: {}
    },
    scoredTest: {
        scoredTests: [],
        scoredTest: {}
    }
}

const rootReducer = (state, action) => {

    if (action.type === CLEAR_ALL_DATA) {

        state = emptyState
    }

    return appReducer(state, action)
}

export default rootReducer