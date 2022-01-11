import {DELETE_ANSWER,GET_ANSWER} from "../actions/types";

const initialState = {
    answers: [],
    answer: {}
};

export default function(state = initialState, action){
    switch(action.type){
        case DELETE_ANSWER:
            return{
                ...state,
                answers: state.answers.filter(answer =>
                    answer.id !== action.payload
                    )
            }
        
        case GET_ANSWER:
            return{
                ...state,
                answer: action.payload
            }

        default:
            return state;
    }
}