import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { GET_ERRORS, GET_TESTS } from '../types'

export const addTest = (testDTO, history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const getTests = (history, userId) => async dispatch => {
    
    try {

        const response = await axios
            .get('http://localhost:8090/api/test/all', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            })

        dispatch({
            type: GET_TESTS,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const getTest = (id, history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const deleteTest = (id, history) => async dispatch => {

    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const updateTest = (testDTO, history) => async dispatch => {

    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}