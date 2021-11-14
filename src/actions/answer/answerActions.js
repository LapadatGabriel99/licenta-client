import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { GET_ERRORS } from '../types'

export const createAnswer = (questionId, answer, history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const updateAnswer = (answerId, answer, history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const deleteAnswer = (answerId, history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const getAnswer = (testId, answerId, history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}