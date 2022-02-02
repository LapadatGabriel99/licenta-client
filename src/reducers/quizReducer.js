import { ADD_ANSWER_QUIZ, REMOVE_ANSWER_QUIZ } from "../actions/types";

const initialState = {
    quizAnswers: [],
};

export default function(state = initialState, action){
    switch(action.type){
        case ADD_ANSWER_QUIZ:
            return {
                ...state,
                quizAnswers: [...state.quizAnswers, action.payload]
            }
        
        case REMOVE_ANSWER_QUIZ:
            const index = state.quizAnswers.indexOf(action.answerId);

            return {
                ...state,
                quizAnswers: [...state.quizAnswers.slice(0, index),
                            ...state.quizAnswers.slice(index)]
            }

        default:
            return state;
    }
}