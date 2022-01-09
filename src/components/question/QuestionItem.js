import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { shallowEqual } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { deleteQuestion } from '../../actions/question/questionActions'
import AnswerItem from '../answer/AnswerItem'
import CreateAnswer from '../answer/CreateAnswer'
import UpdateQuestion from './UpdateQuestion'

function QuestionItem(props) {

    const { testId, question } = props.question

    const dispatch = useDispatch()

    const history = useHistory()

    const [reload, setReload] = useState(false)

    const [showUpdateQuestion, setShowUpdateQuestion] = useState(false)

    const [showCreateAnswer, setShowCreateAnswer] = useState(false)

    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [reload])

    let QuestionPage
    let UpdateQuestionPage
    let CreateAnswerPage
    let answers = question.answerDTOS
    let answerItems = []
    let nrCorrectAnswers = 0

    for (var i = 0; i < answers.length; i++) {

        if (answers[i].correct === true) {

            nrCorrectAnswers++
        }
    }

    if (nrCorrectAnswers > 1) {

        question.hasMultipleAnswers = true
    }
    else {

        question.hasMultipleAnswers = false
    }

    const updateQuestion = async () => {

        await dispatch(updateQuestion(question.id, question, history))
    }

    updateQuestion()

    const QuestionPageContent = answers => {

        if (answers.length < 1) {
            return(
                <Container>
                    <Container className="text-left">
                        <Button className="btn-primary ml-2" 
                                onClick={() => setShowCreateAnswer(prev => !prev)}>
                            <div className="fas fa-plus-circle">
                                <div className="font-quicksand"> Add Answer</div>
                            </div>
                        </Button>
                    </Container>
                    <div className = "alert alert-info text-center font-quicksand" role = "alert">
                        No Answers
                    </div>
                </Container>
            )
        }
        else {

            const answersList = answers.map(answer => (
                <AnswerItem key={answer.answerId} answer={answer} testId={testId} history={history}/>
            ))

            for (let i = 0; i < answersList.length; i++) {

                answerItems.push(answersList[i])
            }

            return(
                <React.Fragment>
                    <Container>
                        <Container className="text-left">
                            <Button className="btn-primary ml-2" 
                                    onClick={() => setShowCreateAnswer(prev => !prev)}>
                                <div className="fas fa-plus-circle">
                                    <div className="font-quicksand"> Add Answer</div>
                                </div>
                            </Button>
                        </Container>
                        <div className="card-body bg-light">
                            {answerItems}
                        </div>
                    </Container>
                </React.Fragment>
            )
        }
    }

    const UpdateQuestionContent = () => {

        if (question.questionId !== "") {

            const updatedQuestion = <UpdateQuestion key={question.questionId} 
                                                    testId={testId}
                                                    questionId={question.questionId}
                                                    history={history}/>

            return(
                <React.Fragment>
                    <Container>
                        {updatedQuestion}
                    </Container>
                </React.Fragment>
            )
        }
    }

    const CreateAnswerContent = () => {

        if (question.questionId !== "") {

            const createAnswer = <CreateAnswer key={question.questionId} 
                                                testId={testId}
                                                questionId={question.questionId}
                                                history={history}/>

            return (
                <React.Fragment>
                    <Container>
                        {createAnswer}
                    </Container>
                </React.Fragment>
            )
        }
    }

    QuestionPage = QuestionPageContent(answers)
    UpdateQuestionPage = UpdateQuestionContent()
    CreateAnswerPage = CreateAnswerContent()

    const onDeleteQuestionHandler = (questionId) => {

        deleteQuestion(questionId, history)
    }

    return (
        <Container>
            <Card className={question.hasMultipleAnswers ? "mb-1 bg-info" : "mb-1 bg-light"}>
                <Card.Header className="text-primary">
                    <h3 className="text-center d-inline font-quicksand card-title">
                        {question.questionText}
                    </h3>
                    <Button className="btn-danger float-right ml-4"
                            onClick={onDeleteQuestionHandler}>
                        <div className="fas fa-minus-circle"></div>
                    </Button>
                    <Button className="btn-success float-right ml-4"
                            onClick={() => setShowUpdateQuestion(prev => !prev)}>
                        <div className="fas fa-edit"></div>
                    </Button>    
                </Card.Header>
                <Card.Body className="bg-light">
                    {QuestionPage}
                </Card.Body>
            </Card>

            <Modal show={() => setShowUpdateQuestion(prev => !prev)} centered>
                <Modal.Header>
                    <Container className="text-right">
                        <Button className="btn-danger ml-4" 
                                onClick={() => setShowUpdateQuestion(prev => !prev)}>
                            <div className="fas fa-window-close"></div>
                        </Button>
                    </Container>
                </Modal.Header>
                <Modal.Body>
                    {UpdateQuestionPage}
                    <br/>
                </Modal.Body>
            </Modal>

            <Modal show={() => setShowCreateAnswer(prev => !prev)} centered>
                <Modal.Header>
                    <Container className="text-right">
                        <Button className="btn-danger ml-4"
                                onClick={() => setShowCreateAnswer(prev => !prev)}>
                            <div className="fas fa-window-close"></div>
                        </Button>
                    </Container>
                </Modal.Header>
                <Modal.Body>
                    {CreateAnswerPage}
                    <br/>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default QuestionItem
