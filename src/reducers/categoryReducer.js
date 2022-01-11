import {GET_CATEGORIES, DELETE_CATEGORY, GET_CATEGORY, UPDATE_CATEGORY} from "../actions/types";

const initialState = {
    categories:[],
    category: {}
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            };
        
        case GET_CATEGORY:
            return{
                ...state,
                category: action.payload
            }
        
        case DELETE_CATEGORY:
            return{
                ...state,
                categories: state.categories.filter(category =>
                    category.id !== action.payload
                    )
            }

        case UPDATE_CATEGORY:
            return{
                ...state,
                category: action.payload
            }

        default:
            return state;
    }
}