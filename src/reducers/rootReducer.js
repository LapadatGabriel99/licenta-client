import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import { CLEAR_ALL_DATA } from "../actions/types";
import authenticationReducer from "./authenticationReducer";
import testReducer from "./testReducer";
import categoryReducer from "./categoryReducer";
import questionReducer from "./questionReducer";
import answerReducer from "./answerReducer";

const appReducer = combineReducers({
    error: errorReducer,
    authenticationReducer: authenticationReducer,
    test: testReducer,
    category: categoryReducer,
    question: questionReducer,
    answer: answerReducer
})

const emptyState = {
    error: {},
    authenticationReducer: {
        id: '',
        username: ''
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
    }
}

const rootReducer = (state, action) => {

    if (action.type === CLEAR_ALL_DATA) {

        state = emptyState
    }

    return appReducer(state, action)
}

export default rootReducer