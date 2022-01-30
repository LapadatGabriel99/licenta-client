import axios from 'axios'
import { handleActionError } from '../../services/miscService'
import { POST_TEST_ANSWERS, GET_SCORED_TESTS, GET_SCORED_TEST, UPDATE_SCORED_TEST, GET_ERRORS } from '../types'

export const postTestAnswers = (dto, history) => async dispatch => {

    try {

        const response = await axios
            .post('http://localhost:8090/api/scored-test/post-answers', dto, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            })

        dispatch({
            type: POST_TEST_ANSWERS,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}

export const getScoredTests = (history) => async dispatch => {

    try {

        const response = await axios
            .get('http://localhost:8090/api/scored-test/all', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            })

        dispatch({
            type: GET_SCORED_TESTS,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}

export const getScoredTest = (id, history) => async dispatch => {

    try {

        const response = await axios
            .get(`http://localhost:8090/api/scored-test/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            })

        dispatch({
            type: GET_SCORED_TEST,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}

export const updateScoredTest = (dto, history) => async dispatch => {

    try {

        const response = await axios
            .put('http://localhost:8090/api/scored-test/update', dto, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            })

        dispatch({
            type: UPDATE_SCORED_TEST,
            payload: response.data
        })
    }
    catch (error) {

        handleActionError(error, history, dispatch, GET_ERRORS)
    }
}