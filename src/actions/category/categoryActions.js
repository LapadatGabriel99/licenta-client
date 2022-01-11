import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { GET_CATEGORIES, GET_ERRORS, DELETE_CATEGORY, GET_CATEGORY, CREATE_CATEGORY, UPDATE_CATEGORY } from '../types'

export const getCategories = (history, userId) => async dispatch => {
    
    try {
        
        const response = await axios
            .get('http://localhost:8090/api/category/all', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            })

        dispatch({
            type: GET_CATEGORIES,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const deleteCategory = (categoryId, history) => async dispatch => {
    
    try {
        const response = await axios
            .delete(`http://localhost:8090/api/category/${categoryId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
            }
        })

        dispatch({
            type: DELETE_CATEGORY,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const getCategory = (categoryId, history) => async dispatch => {
    
    try {

        const response = await axios
            .get(`http://localhost:8090/api/category/${categoryId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
            }
        })

        dispatch({
            type: GET_CATEGORY,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const createCategory = (category, history) => async dispatch => {
    
    try {
        const response = await axios
            .post('http://localhost:8090/api/category/create', category, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
            }
        })

        dispatch({
            type: CREATE_CATEGORY,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const updateCategory = (category, history) => async dispatch => {
    
    try {

        console.log(category)

        const response = await axios
            .put('http://localhost:8090/api/category/update', category, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
            }
        })

        dispatch({
            type: UPDATE_CATEGORY,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}