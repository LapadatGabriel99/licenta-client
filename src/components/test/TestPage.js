import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { shallowEqual } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getTest } from '../../actions/test/testActions'
import CreateQuestion from '../question/CreateQuestion'
import QuestionItem from '../question/QuestionItem'
import UpdateTest from './UpdateTest'

function TestPage(props) {

    const { testId } = props.match.params

    const test = useSelector(state => state.test.test)

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

    const [showUpdateTest, setShowUpdateTest] = useState(false)

    const [showCreateQuestion, setShowCreateQuestion] = useState(false)

    const history = useHistory()

    useEffect(() => {

        const fetchTest = async (id) => {

            await dispatch(getTest(history, id))

            setReload(prev => !prev)
        }

        fetchTest(testId)
    }, []) 

    useEffect(() => {

    }, [reload])

    let testPageContent;
    let updateTestContent;
    let createQuestionContent;
    let questionItems = [];

    const createTestPage = questions => {
        if (questions.length < 1) {
            <div className = "alert alert-info text-center font-quicksand" role = "alert">
                No questions
            </div>
        }
        else {
            const questionsList = questions.map(question => (
                <QuestionItem key={question.id} question={question} testId={test.id}/>
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

    const updateTest = () => {
        if (test.id !== "") {
            const newTest = <UpdateTest key={test.id} id={test.id}/>

            return(
                <React.Fragment>
                    <Container>
                        {newTest}
                    </Container>
                </React.Fragment>
            )
        }
    }

    const createQuestion = () => {
        if (test.id !== "") {
            const newQuestion = <CreateQuestion key={test.id} testId={test.id}/>

            return(
                <React.Fragment>
                    <Container>
                        {newQuestion}
                    </Container>
                </React.Fragment>
            )
        }
    }

    testPageContent = createTestPage(test.questionDTOS)
    updateTestContent = updateTest()
    createQuestionContent = createQuestion()

    return (
        <Container className="text-center">
            <Row className="mb-4 justify-content-center">
                <Col className="col-md-8">
                    <Link to="/" className="btn btn-outline-primary">
                        <div className="fas fa-arrow-circle-left">
                            <div className="font-quicksand"> Back to board</div>
                        </div>
                    </Link>
                    <p />
                    <Container>
                        <h1 className="font-quicksand d-inline">test.name</h1>
                        <Button className="btn-success ml-4 mb-3" 
                                onClick={() => setShowUpdateTest(prev => !prev)}>
                            <div className="fas fa-edit">
                            </div>
                        </Button>
                    </Container>
                    <Container className="text-left">
                        <Button className="btn-primary ml-3"
                                onClick={() => setShowCreateQuestion(prev => !prev)}>
                            <div className="fas fa-plus-circle">
                                <div className= "font-quicksand"> Add Question</div>
                            </div>
                        </Button>
                    </Container>
                    {testPageContent}

                    <Modal show={showUpdateTest} centered>
                        <Modal.Header>
                            <Container className="text-right">
                                <Button className="btn-danger ml-4" 
                                        onClick={() => setShowUpdateTest(prev => !prev)}>
                                    <div className="fas fa-window-close"></div>
                                </Button>
                            </Container>
                        </Modal.Header>
                        <Modal.Body>
                            {updateTestContent}
                            <br />
                        </Modal.Body>
                    </Modal>

                    <Modal show={showCreateQuestion} centered>
                        <Modal.Header>
                            <Container className="text-right">
                                <Button className="btn-danger ml-4"
                                        onClick={() => setShowCreateQuestion(prev => !prev)}>
                                    <div className="fas fa-window-close"></div>
                                </Button>
                            </Container>
                        </Modal.Header>
                        <Modal.Body>
                            {createQuestionContent}
                            <br />
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </Container>
    )
}

export default TestPage
