export const isObject  = (item) => {

    return (typeof item === 'object' && !Array.isArray(item) && item !== null)
}

export const handleActionError = (error, history, dispatch, type) => {

    if (error.response) {

        dispatch({
            type: type,
            payload: error.response
        })

        history.push('/response-api-error')
    }
    else if (error.request) {

        alert(`Something went wrong:\n ${error.request}`)

        console.log(error.request)
    }
    else {

        console.log('Error: ', error.message);

        dispatch({
            type: type,
            payload: error.message
        })

        history.push('/error')
    }

    console.log(error.config)
}