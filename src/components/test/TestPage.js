import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { shallowEqual } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getTest } from '../../actions/test/testActions'
import CreateQuestion from '../question/CreateQuestion'
import QuestionItem from '../question/QuestionItem'
import UpdateTest from './UpdateTest'
import '../../styles/Misc.css'

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

            await dispatch(getTest(id, history))

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

    const updateTest = () => {

        if (test == null) {

            return (
                <React.Fragment>
                </React.Fragment>
            )
        }

        if (test.id !== "") {
            const newTest = <UpdateTest key={test.id} testId={test.id}/>

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

        if (test == null) {

            return (
                <React.Fragment>
                </React.Fragment>
            )
        }

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

    testPageContent = createTestPage(test.questions)
    updateTestContent = updateTest()
    createQuestionContent = createQuestion()

    return (
        <Container className="text-center">
            <Row className="mb-4 justify-content-center">
                <Col className="col-md-8">
                    <p />
                    <Container>
                        <Card className="text-center mb-2 page-header">
                            <Card.Header className="bg-dark page-header-shadow text-white">
                                <h3 className="font-quicksand">{test.name}</h3>
                            </Card.Header>
                        </Card>
                    </Container>
                    <Container className="mt-4">
                        <Button className="btn-success mt-1 ml-4 mb-3 shadow border-0" 
                            onClick={() => setShowUpdateTest(prev => !prev)}>
                            <div className="fas fa-edit">
                            </div>
                            <span className="button-page-top"> Update</span>
                        </Button>
                    </Container>
                    <Container className="text-left mt-1 mb-4">
                        <Button className="btn-dark mb-4 mt-4 shadow-button"
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
