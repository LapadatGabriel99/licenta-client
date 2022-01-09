import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { deleteAnswer } from '../../actions/answer/answerActions'
import QuestionItem from '../question/QuestionItem'
import UpdateAnswer from './UpdateAnswer'

function AnswerItem(props) {

    const { answer, testId } = props

    const dispatch = useDispatch()

    const history = useHistory()

    const [reload, setReload] = useState(false)

    const [showUpdateAnswer, setShowUpdateQuestion] = useState(false)

    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [reload])

    const onDeleteAnswerHandler = (id) => {

        const removeAnswer = async (id) => {

            await dispatch(deleteAnswer(id, history))
        }

        removeAnswer(id)
    }

    let UpdateAnswerPage;

    const UpdateAnswerContent = () => {

        if(answer.answerId !== "") {

            const updateAnswer = <UpdateAnswer key={answer.answerId} 
                                                testId={testId}
                                                answerId={answer.answerId}
                                                history={history}/>

            return (
                <React.Fragment>
                    <Container>
                        {updateAnswer}
                    </Container>
                </React.Fragment>
            )
        }
    }

    UpdateAnswerPage = UpdateAnswerContent()

    return (
        <Container>
            <Card className={answer.correct ? "mb-1 bg-warning" : "mb-1 bg-light"}>
                <Card.Header className="text-dark">
                    <h5 className="card-title text-dark text-center font-quicksand d-inline">
                        {answer.answerText}
                    </h5>
                    <Button className="btn-danger float-right ml-4"
                            onClick={onDeleteAnswerHandler}>
                        <div className="fas fa-minus-circle"></div>
                    </Button>
                    <Button className="btn-success float-right ml-4"
                            onClick={() => setShowUpdateQuestion(prev => !prev)}>
                        <div className="fas fa-edit"></div>
                    </Button>
                </Card.Header>

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
                        {UpdateAnswerPage}
                        <br/>
                    </Modal.Body>
                </Modal>
            </Card>
        </Container>
    )
}

export default AnswerItem
