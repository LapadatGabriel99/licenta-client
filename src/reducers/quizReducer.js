import { ADD_ANSWER_QUIZ, REMOVE_ANSWER_QUIZ } from "../actions/types";

const initialState = {
    quizAnswers: [],
    testId: ''
};

export default function(state = initialState, action){
    switch(action.type){
        case ADD_ANSWER_QUIZ:
            return {
                ...state,
                quizAnswers: [...state.quizAnswers, action.payload],
                testId: action.testId
            }
        
        case REMOVE_ANSWER_QUIZ:

            let index = 0;

            for(let i = 0; i < state.quizAnswers.length; i++) {

                if(state.quizAnswers[i].answerId === action.payload.answerId) {

                    index = i;
                }
            }

            console.log(index)

            return {
                ...state,
                quizAnswers: [...state.quizAnswers.slice(0, index),
                            ...state.quizAnswers.slice(index + 1)]
            }

        default:
            return state;
    }
}