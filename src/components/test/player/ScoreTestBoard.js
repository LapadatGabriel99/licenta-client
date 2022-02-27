import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getScoredTests } from '../../../actions/scoredTest/scoredTestActions'
import ScoreTestBoardItem from './ScoreTestBoardItem'
import '../../../styles/Misc.css'

function ScoreTestBoard(props) {

    const scoredTests = useSelector(state => state.scoredTest.scoredTests)

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

    const history = useHistory()

    useEffect(() => {

        const fetchAll = async () => {

            await dispatch(getScoredTests(history))

            setReload(prev => !prev)
        }

        fetchAll()
    }, [])

    useEffect(() => {

    }, [reload])

    let boardContent;
    let boardItems;

    const createBoard = scoredTests => {

        if (scoredTests == null) {
            <Container>
                    <Row>
                        <Col>
                            <div className="alert alert-info text-center" role="start">
                                No tests were taken!
                            </div>
                        </Col>
                    </Row>
            </Container>
        }

        if (scoredTests.length < 1) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <div className="alert alert-info text-center" role="start">
                                No tests were taken!
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }

        boardItems = scoredTests.map(scoredTest => (

            <ScoreTestBoardItem id={scoredTest.id}
                                 name={scoredTest.name}
                                 categoryName={scoredTest.categoryName}
                                 numOfCorrectAnswers={scoredTest.numOfCorrectAnswers}
                                 numOfWrongAnswers={scoredTest.numOfWrongAnswers}
                                 wasTestModified={scoredTest.wasTestModified}/>
        ))

        return (
            <Container className="w-75 mt-4">
                <Row>
                    <Col>
                        <Card className="text-center mb-2">
                            <Card.Header className="bg-primary text-white">
                                <h3 className="font-quicksand">Scored Tests</h3>
                            </Card.Header>
                        </Card>
                        <Container className="mt-2">
                            {boardItems}
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }

    boardContent = createBoard(scoredTests)

    return (
        <Container>
            {boardContent}
        </Container>
    )
}

export default ScoreTestBoard
