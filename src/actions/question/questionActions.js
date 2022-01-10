import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { CREATE_QUESTION, DELETE_QUESTION, GET_ERRORS, GET_QUESTION, GET_QUESTIONS, UPDATE_QUESTION } from '../types'

export const createQuestion = (testId, question, history) => async dispatch => {
    
    try {

        const response = await axios.
                post(`http://localhost:8090/api/question/create/${testId}`, question, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                    }
                })

        dispatch({
            type: CREATE_QUESTION,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const updateQuestion = (questionId, question, history) => async dispatch => {
    
    try {

        const response = await axios
                .put(`http://localhost:8090/api/question/update/${questionId}`, question, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                    }
                })

        dispatch({
            type: UPDATE_QUESTION,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const getQuestions = (history) => async dispatch => {
    
    try {

        const response = await axios
                .get('http://localhost:8090/api/question/all', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                    }
                })

        dispatch({
            type: GET_QUESTIONS,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const deleteQuestion = (questionId, history) => async dispatch => {
    
    try {

       const response = await axios
                .delete(`http://localhost:8090/api/question/${questionId}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                    }
                })

        dispatch({
            type: DELETE_QUESTION,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const getQuestion = (questionId, history) => async dispatch => {
    
    try {

         const response = await axios
                .get(`http://localhost:8090/api/question/${questionId}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                    }
                })

        dispatch({
            type: GET_QUESTION,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}