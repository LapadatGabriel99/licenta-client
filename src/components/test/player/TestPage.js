import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getTest } from '../../../actions/test/testActions'
import QuestionItem from '../../question/player/QuestionItem'

function TestPage(props) {

    const { testId } = props.match.params

    const test = useSelector(state => state.test.test)

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

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

    return (
        <Container className="text-center">
            <Row className="mb-4 justify-content-center">
                <Col className="col-md-8">
                    <p />
                    <Container className="mb-5">
                        <Card className="text-center mb-2">
                            <Card.Header className="bg-primary text-white">
                                <h3 className="font-quicksand">{test.name}</h3>
                            </Card.Header>
                        </Card>
                    </Container>
                    {testPageContent}
                </Col>
            </Row>
        </Container>
    )
}

export default TestPage
