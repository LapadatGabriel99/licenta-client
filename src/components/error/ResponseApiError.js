import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

const ResponseApiError = (props) => {
    
    const error = useSelector(state => state.error)

    const history = useHistory()

    const handleBackButtonClick = (history, to) => {

        history.push(to)
    }

    const handleSimpleErrorMessage = (errorMessage) => {

        return (
            <Container fluid>
                <Row>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        )
    }

    const handleComplexErrorMessage = (error) => {

        return (
            <Container>
                <Row>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        )
    }

    if (error === null) {

        return handleSimpleErrorMessage('Nothing to show here!')
    }
    else {

        if (typeof error === 'object') {

            if (Object.keys(error).length === 0 && error.constructor === Object) {

                return handleSimpleErrorMessage('Nothing to show here!')
            }
            else {

                const errors = Object.keys(error).map((key) => [key, error[key]])

                return handleComplexErrorMessage(errors)
            }
        }
    }
}

export default ResponseApiError
