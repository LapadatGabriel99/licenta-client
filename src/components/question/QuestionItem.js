import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { shallowEqual } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { deleteQuestion, updateQuestion } from '../../actions/question/questionActions'
import AnswerItem from '../answer/AnswerItem'
import CreateAnswer from '../answer/CreateAnswer'
import UpdateQuestion from './UpdateQuestion'
import '../../styles/Misc.css'

function QuestionItem(props) {

    const { testId, question } = props

    const dispatch = useDispatch()

    const history = useHistory()

    const [reload, setReload] = useState(false)

    const [showUpdateQuestion, setShowUpdateQuestion] = useState(false)

    const [showCreateAnswer, setShowCreateAnswer] = useState(false)

    useEffect(() => {

        const put = async () => {

            await dispatch(updateQuestion(question.id, question, history))
        }
    
        put()
    }, [])

    useEffect(() => {

    }, [reload])

    let QuestionPage
    let UpdateQuestionPage
    let CreateAnswerPage
    let answers = question.answers
    let answerItems = []
    let nrCorrectAnswers = 0

    const hasQuestionMultipleAnswers = answers => {

        if (answers == null) {

            return;
        }

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
    }

    hasQuestionMultipleAnswers(answers)

    const QuestionPageContent = answers => {

        if (answers == null) {

            return(
                <React.Fragment></React.Fragment>
            )
        }

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

            const answersList = answers.map((answer, i) => (
                <AnswerItem key={i} answer={answer} testId={testId} history={history}/>
            ))

            for (let i = 0; i < answersList.length; i++) {

                answerItems.push(answersList[i])
            }

            return(
                <React.Fragment>
                    <Container>
                        <Container className="text-left">
                            <Button className="btn-dark ml-2 shadow-button" 
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

        if (question == null) {

            return(
                <React.Fragment></React.Fragment>
            )
        }

        if (question.questionId !== "") {

            const updatedQuestion = <UpdateQuestion key={question.id} 
                                                    testId={testId}
                                                    questionId={question.id}
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

        if (question == null) {

            return(
                <React.Fragment></React.Fragment>
            )
        }

        if (question.questionId !== "") {

            const createAnswer = <CreateAnswer key={question.id} 
                                                testId={testId}
                                                questionId={question.id}
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

        const removeQuestion = async (id) => {

            await dispatch(deleteQuestion(questionId, history))
        }

        removeQuestion(questionId)

        window.location.reload()
    }

    return (
        <Container className="mb-5">
            <Card className={question.hasMultipleAnswers 
                ? "mb-1 bg-light page-header-shadow border-0 rounded-3" 
                : "mb-1 bg-light page-header-shadow border-0 rounded-3"}>
                <Card.Header className="text-dark bg-light card-question-item-header">
                    <Card className="bg-light shadow border-0">
                        <Card.Header className="bg-light">
                            <h3 className="text-center d-inline card-body-area card-title">
                            {question.questionText}
                            </h3>
                            <Button className="btn-danger float-right ml-4 mb-1 border-0"
                                    onClick={() => onDeleteQuestionHandler(question.id)}>
                                <div className="fas fa-minus-circle"></div>
                            </Button>
                            <Button className="btn-success float-right ml-4 mb-1 border-0"
                                    onClick={() => setShowUpdateQuestion(prev => !prev)}>
                                <div className="fas fa-edit"></div>
                            </Button>  
                        </Card.Header>
                    </Card>  
                </Card.Header>
                <Card.Body className="bg-light">
                    {QuestionPage}
                </Card.Body>
                <Card.Footer className="bg-light card-footer-area"></Card.Footer>
            </Card>

            <Modal show={showUpdateQuestion} centered>
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

            <Modal show={showCreateAnswer} centered>
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
