import React, { useState } from 'react'
import { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { getTestsForPlayer } from '../../../actions/test/testActions'
import TestBoardItem from './TestBoardItem'

function TestBoard(props) {

    const tests = useSelector(state => state.test.tests)

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

    const history = useHistory()

    useEffect(() => {

        const fetchTests = async () => {

            await dispatch(getTestsForPlayer(history))

            setReload(prev => !prev)
        }

        fetchTests()
    }, [])

    useEffect(() => {

        
    }, [reload])

    let boardContent;
    let boardItems;

    const createBoard = tests => {

        if (tests == null) {
            <React.Fragment></React.Fragment>
        }

        if (tests.length < 1) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <div className="alert alert-info text-center" role="start">
                                No tests available here!
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }

        boardItems = tests.map(test => (

            <TestBoardItem id={test.id}
                            name={test.name}
                            categoryName={test.categoryName}/>
        ))

        return (
            <Container className="w-75 mt-4">
                <Row>
                    <Col>
                        <Card className="text-center mb-2">
                            <Card.Header className="bg-primary text-white">
                                <h3 className="font-quicksand">Tests</h3>
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

    boardContent = createBoard(tests)

    return (
        <Container>
            {boardContent}
        </Container>
    )
}

export default TestBoard
