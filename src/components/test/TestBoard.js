import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getTests } from '../../actions/test/testActions'

function TestBoard() {

    const tests = useSelector(state => state.test.tests)

    const userState = useSelector(state => state.user, shallowEqual)

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

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

    return (
        <Container fluid className="">
            <Row className="">
                <Col className>
                    <div>
                        <h3>
                            List of tests
                        </h3>
                    </div>
                </Col>
            </Row>
            <Row className="">

            </Row>
        </Container>
    )
}

export default TestBoard
