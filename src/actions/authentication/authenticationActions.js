import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { CLEAR_ALL_DATA, GET_ERRORS, LOGIN, REGISTER, SUCCESSFUL_LOGIN, SUCCESSFUL_LOGOUT } from '../types'

export const login = (userCredentials, history) => async dispatch => {

    try {
        const response = await axios
            .post('http://localhost:8090/api/user/login', userCredentials)

        dispatch({
            type: LOGIN,
            payload: response.data.userDTO
        })

        dispatch({
            type: SUCCESSFUL_LOGIN,
            payload: {
                role: response.data.usedDTO.roles[0].name
            }
        })

        localStorage.setItem('jwtToken', response.data.token)

        history.push('/userHub')
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}

export const register = (userCredentials, history) => async dispatch => {

    try {

        const response = await axios
            .post('http://localhost:8090/api/user/register', userCredential)

        dispatch({
            type: REGISTER,
            payload: response.data
        })

        history.push('/login')
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}

export const logout = (history) => async dispatch => {

    try {

        await axios.delete('http://localhost:8090/api/user/logout')

        dispatch({
            type: CLEAR_ALL_DATA,
            payload: null
        })

        dispatch({
            type: SUCCESSFUL_LOGOUT,
            payload: {
                role: 'GUEST'
            }
        })

        history.push('/')
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}