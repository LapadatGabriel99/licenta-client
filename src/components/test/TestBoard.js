import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getTests } from '../../actions/test/testActions'
import CreateTest from './CreateTest'
import TestBoardItem from './TestBoardItem'

function TestBoard() {

    const tests = useSelector(state => state.test.tests)

    const userState = useSelector(state => state.user, shallowEqual)

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

    const [show, setShow] = useState(false)

    const history = useHistory()

    useEffect(() => {
        
        const fetchTests = async (id) => {

            await dispatch(getTests(history, id))

            setReload(prev => !prev)
        }

        fetchTests(userState.id)
    }, [])

    useEffect(() => {

    }, [reload])

    let boardContent;
    let modalContent;
    let boardItems;

    const createTest = () => {
        const newTest = <CreateTest history={history}/>

        return (
            <React.Fragment>
                <Container>
                    {newTest}
                </Container>
            </React.Fragment>
        )
    }

    modalContent = createTest()

    const createBoard = tests => {
        if (tests.lenght < 1) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <Button className="btn-primary mb-4" 
                                    onClick={() => setShow(prev => !prev)}>
                                <i className="fas fa-plus-circle"> Create Test</i>
                            </Button>
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
            <Container>
                <Row>
                    <Col>
                        <Button className="btn-primary mb-4"
                                onClick={() => setShow(prev => !prev)}>
                            <div className="fas fa-plus-circle"></div>
                            <span className="font-quicksand"> Add Test</span>
                        </Button>
                        <Card className="text-center mb-2">
                            <Card.Header className="bg-primary text-white">
                                <h3 className="font-quicksand">Tests</h3>
                            </Card.Header>
                        </Card>
                        {boardItems}
                    </Col>
                </Row>
            </Container>
        )
    }

    boardContent = createBoard(tests)

    return (
        <Container>
            {boardContent}
            <Modal show={show} centered>
                <Modal.Header>
                    <Container className="text-right">
                        <Button className="btn-danger ml-4"
                                onClick={()=> {
                                    setShow(prev => !prev)
                                    window.location.reload()
                                }}/>
                    </Container>
                </Modal.Header>
                <Modal.Body>
                    {modalContent}
                    <br/>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default TestBoard
