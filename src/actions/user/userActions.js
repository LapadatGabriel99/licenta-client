import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { GET_ERRORS, GET_USER_DETAILS, REFRESH_USER, UPDATE_USER_DETAILS } from '../types'

export const getUserDetails = (userId, history) => async dispatch => {

    try {

        const response = await axios
            .get('http://localhost:8090/api/user/get-user-details')

        dispatch({
            type: GET_USER_DETAILS,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}

export const refreshUser = (history) => async dispatch => {

    try {

        const response = await axios
            .get('http://localhost:8090/api/user/refresh-user')

        dispatch({
            type: REFRESH_USER,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}

export const updateUserDetails = (history) => async dispatch => {

    try {

        const response = await axios
            .put('http://localhost:8090/api/user/get-user-details')

        dispatch({
            type: UPDATE_USER_DETAILS,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}