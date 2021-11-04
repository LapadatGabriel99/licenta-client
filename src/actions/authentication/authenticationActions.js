import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { GET_ERRORS } from '../types'

export const login = (userCredentials, history) => async dispatch => {

    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}

export const register = (userCredentials, history) => async dispatch => {

    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}

export const logout = (history) => async dispatch => {

    try {

       
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}