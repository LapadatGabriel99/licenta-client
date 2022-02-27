import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postTestAnswers } from '../../../actions/scoredTest/scoredTestActions';

function TestPageSubmit(props) {

    const testAnswers = useSelector(state => state.quiz) 

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

    const history = useHistory()

    useEffect(() => {

        const post = async () => {

            await dispatch(postTestAnswers({
                'testId': testAnswers.testId,
                'postAnswers': testAnswers.quizAnswers
            }, history))

            setReload(prev => !prev)
        }

        post()
    }, [])

    useEffect(() => {

        
    }, [reload])

    const onGoBackClick = (e) => {
        e.preventDefault()

        history.push('/player/test-board')
    }

    return(
        <Container className="mt-5 w-50">
            <div className="alert alert-success text-center" role="start">
                Answers submitted successfully!
            </div>
            <Button className="btn-success"
                     onClick={onGoBackClick}>
                <div className="fas fa-arrow-left text-light"></div>
                <span className="btn-back-submit-page text ml-1">Go Back</span>
            </Button>
        </Container>
    );
}

export default TestPageSubmit;
