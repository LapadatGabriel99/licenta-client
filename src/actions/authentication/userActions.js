import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { GET_ERRORS } from '../types'

export const getUserDetails = (userId, history) => async dispatch => {

    try {

    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS) 
    }
}