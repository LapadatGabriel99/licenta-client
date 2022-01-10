import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { CREATE_ANSWER, DELETE_ANSWER, GET_ERRORS, UPDATE_ANSWER } from '../types'

export const createAnswer = (questionId, answer, history) => async dispatch => {
    
    try {

        const response = await axios.
                post(`http://localhost:8090/api/answer/create/${questionId}`, answer, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                    }
                })

        dispatch({
            type: CREATE_ANSWER,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const updateAnswer = (answerId, answer, history) => async dispatch => {
    
    try {
        
        const response = await axios
                .put(`http://localhost:8090/api/answer/update/${answerId}`, answer, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                    }
                })

        dispatch({
            type: UPDATE_ANSWER,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const deleteAnswer = (answerId, history) => async dispatch => {
    
    try {

        const response = await axios
                .delete(`http://localhost:8090/api/answer/${answerId}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                    }
                })

        dispatch({
            type: DELETE_ANSWER,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const getAnswer = (testId, answerId, history) => async dispatch => {
    
    try {

        const response = await axios
                .get(`http://localhost:8090/api/answer/${answerId}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                    }
                })

        dispatch({
            type: DELETE_ANSWER,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const getAnswers = (history) => async dispatch => {

    try {

        const response = await axios
                .get(`http://localhost:8090/api/answer/all`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                    }
                })

        dispatch({
            type: DELETE_ANSWER,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}