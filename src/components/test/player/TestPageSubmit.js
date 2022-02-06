import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function TestPageSubmit(props) {

    const testAnswers = useSelector(state => state.quiz) 

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

    const history = useHistory()

    useEffect(() => {

        const post = async () => {

            await dispatch({
                'testId': testAnswers.testId,
                'postAnswers': quiz.quizAnswers
            })

            setReload(prev => !prev)
        }

        post()
    }, [])

    useEffect(() => {

        

    }, [reload])

    return(
        <div className="alert alert-success text-center" role="start">
            Answers submitted successfully!
        </div>
    );
}

export default TestPageSubmit;
