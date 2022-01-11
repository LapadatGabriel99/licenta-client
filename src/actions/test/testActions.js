import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { GET_ERRORS, GET_TESTS, CREATE_TEST, UPDATE_TEST, GET_TEST, DELETE_TEST } from '../types'

export const createTest = (testDTO, history) => async dispatch => {
    
    try {
        const response = await axios
            .post('http://localhost:8090/api/test/create', testDTO, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
            }
        })

        dispatch({
            type: CREATE_TEST,
            payload: response.data
        })
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
        const response = await axios
            .get(`http://localhost:8090/api/test/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            })

        dispatch({
            type: GET_TEST,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const deleteTest = (id, history) => async dispatch => {

    try {

        console.log("Test id:" + id)

        const response = await axios
            .delete(`http://localhost:8090/api/test/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            })

        dispatch({
            type: DELETE_TEST,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const updateTest = (testDTO, history) => async dispatch => {

    try {
        const response = await axios
            .put('http://localhost:8090/api/test/update', testDTO, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
            }
        })

        dispatch({
            type: UPDATE_TEST,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}