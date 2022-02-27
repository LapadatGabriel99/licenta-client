import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getScoredTestByTestId } from '../../../actions/scoredTest/scoredTestActions'
import { getTest } from '../../../actions/test/testActions'
import { CLEAR_ANSWER_QUIZ } from '../../../actions/types'
import QuestionItem from '../../question/player/QuestionItem'

const UpdateTestPage = (props) => {

    const { testId } = props.match.params

    const scoredTest = useSelector(state => state.scoredTest.scoredTest)

    const test = useSelector(state => state.test.test)

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

    const history = useHistory()

    useEffect(() => {

        const fetchTest = async (id) => {

            await dispatch(getTest(id, history))

            dispatch({
                type: CLEAR_ANSWER_QUIZ,
                payload: ''
            })

            setReload(prev => !prev)
        }

        fetchTest(testId)
    }, []) 

    useEffect(() => {

    }, [reload])

    let testPageContent;
    let questionItems = [];

    const createTestPage = questions => {

        if (questions == null) {

            return (
                <React.Fragment>
                </React.Fragment>
            )
        }

        if (questions.length < 1) {
            <div className = "alert alert-info text-center font-quicksand" role = "alert">
                No questions
            </div>
        }
        else {

            const questionsList = questions.map((question, i) => (
                <QuestionItem key={i} question={question} testId={test.id}/>
            ))

            for(let i = 0; i < questionsList.length; i++) {
                questionItems.push(questionsList[i])
            }

            return (
                <React.Fragment>
                    <Container>
                        {questionItems}
                    </Container>
                </React.Fragment>
            )
        }
    }
    
    testPageContent = createTestPage(test.questions)

    const onGoBackClick = (e) => {
        e.preventDefault()

        history.push('/player/test-board')
    }

    const onSubmitAnswersClick = (e) => {
        e.preventDefault()

        console.log('here');
        history.push(`/player/update-test-page/${testId}/submit`)
    }

    return (
        <Container className="text-center">
            <Row className="mb-4 justify-content-center">
                <Col className="col-md-8">
                    <p />
                    <Container className="mb-5">
                        <Card className="text-center mb-2">
                            <Card.Header className="bg-primary text-white">
                                <Container>
                                    <Row>
                                        <Col className="col-md-4">
                                            <Button className="btn-primary"
                                                    onClick={onGoBackClick}>
                                                <div className="fas fa-arrow-left"></div>
                                            </Button>
                                        </Col>
                                        <Col className="col-md-4">
                                            <h3 className="font-quicksand">{test.name}</h3>
                                        </Col>
                                        <Col className="col-md-4">
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Header>
                        </Card>
                    </Container>
                    {testPageContent}
                    <Container>
                        <Row className="quiz-page-button-area">
                            <Col className="col-md-4">
                                <Button className="btn-primary btn-lg mt-3"
                                        onClick={onGoBackClick}>
                                    Go Back
                                </Button>
                            </Col>
                            <Col className="col-md-4">
                            </Col>
                            <Col className="col-md-4">
                                <Button onClick={onSubmitAnswersClick} 
                                      className="btn-success btn-lg mt-3">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default UpdateTestPage