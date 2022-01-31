import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import AnswerItem from '../../answer/player/AnswerItem'
import '../../../styles/Misc.css'

function QuestionItem(props) {

    const { testId, question } = props

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
                <AnswerItem key={i} answer={answer} testId={testId} history={history}/>
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
        <Container>
            <Card>
                <Card.Header>
                </Card.Header>
                <Card.Body>
                </Card.Body>
                <Card.Footer className="bg-light card-footer-area"></Card.Footer>
            </Card>
        </Container>
    )
}

export default QuestionItem
