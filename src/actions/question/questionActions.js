import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { GET_ERRORS } from '../types'

export const createQuestion = (testId, question, history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const updateQuestion = (questionId, question, history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const getQuestions = (history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const deleteQuestion = (questionId, history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const getQuestion = (questionId, history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}