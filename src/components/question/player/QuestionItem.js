import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import AnswerItem from '../../answer/player/AnswerItem'
import '../../../styles/Misc.css'

function QuestionItem(props) {

    const { key, testId, question } = props

    const dispatch = useDispatch()

    const history = useHistory()

    const [reload, SetReload] = useState(false)

    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [reload])

    let QuestionPage
    let answers = question.answers
    let answerItems = []

    const QuestionPageContent = answers => {

        if (answers == null) {

            return(
                <React.Fragment></React.Fragment>
            )
        }

        if (answers.length < 1) {
            return(
                <Container>
                    <div className = "alert alert-info text-center font-quicksand" role = "alert">
                        No Answers
                    </div>
                </Container>
            )
        }
        else {

            const answersList = answers.map((answer, i) => (
                <AnswerItem key={i} 
                            questionId={question.id}
                            questionKey={key}
                            answer={answer} 
                            testId={testId} 
                            questionHasMultipleAnswers={question.hasMultipleAnswers}/>
            ))

            for (let i = 0; i < answersList.length; i++) {

                answerItems.push(answersList[i])
            }

            return(
                <React.Fragment>
                    <Container>
                        <div className="card-body bg-light">
                            {answerItems}
                        </div>
                    </Container>
                </React.Fragment>
            )
        }
    }

    QuestionPage = QuestionPageContent(answers)

    return (
        <Container className="mb-5">
            <Card className="mb-1 bg-light page-header-shadow border-0 rounded-3">
                <Card.Header className="text-dark bg-light card-question-item-header">
                    <Card className="bg-light shadow border-0 mt-2">
                        <Card.Header className="bg-light">
                            <h3 className="text-center d-inline card-body-area card-title">
                                {question.questionText}
                            </h3>
                        </Card.Header>
                    </Card>
                </Card.Header>
                <Card.Body className="bg-light pt-1">
                    <Container>
                        <form>
                            {QuestionPage}
                        </form>
                    </Container>
                </Card.Body>
                <Card.Footer className="bg-light card-footer-area"></Card.Footer>
            </Card>
        </Container>
    )
}

export default QuestionItem
