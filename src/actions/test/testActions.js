import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { GET_ERRORS } from '../types'

export const addTest = (testDTO, history) => async dispatch => {
    
    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const getTests = (history) => async dispatch => {
    
    try {

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