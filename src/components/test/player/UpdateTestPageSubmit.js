import React, { useState } from 'react'
import '../../../styles/Misc.css'
import '../../../services/miscService';
import { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { getScoredTestByTestId, updateScoredTest } from '../../../actions/scoredTest/scoredTestActions'
import { isObject } from '../../../services/miscService';

const UpdateTestPageSubmit = () => {
    const testAnswers = useSelector(state => state.quiz) 

    const scoredTest = useSelector(state => state.scoredTest.scoredTest)

    const dispatch = useDispatch()

    const history = useHistory()

    const [reload, setReload] = useState(false)

    const [reloadAgain, setReloadAgain] = useState(false)

    useEffect(() => {

        const get = async () => {

            await dispatch(getScoredTestByTestId(testAnswers.testId, history))

            setReload(prev => !prev)
        }

        get()
    }, [])

    useEffect(() => {

        const post = async () => {

            await dispatch(updateScoredTest({
                'testId': testAnswers.testId,
                'scoredTest': scoredTest,
                'postAnswers': testAnswers.quizAnswers
            }, history))

            setReloadAgain(prev => !prev)
        }

        if (reload === true) {

            post()
        }
    }, [reload])

    useEffect(() => {

    }, [reloadAgain])

    const onGoBackClick = (e) => {
        e.preventDefault()

        history.push('/player/test-board')
    }

    return(
        <Container className="mt-5 w-50">
            <div className="alert alert-info text-center answers-submitted-succes" role="start">
                Answers submitted successfully!
            </div>
            <Button className="btn-info"
                     onClick={onGoBackClick}>
                <div className="fas fa-arrow-left text-light"></div>
                <span className="btn-back-submit-page text ml-1">Go Back</span>
            </Button>
        </Container>
    );
}

export default UpdateTestPageSubmit