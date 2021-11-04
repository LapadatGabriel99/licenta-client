import React from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import '../../styles/Error.css'

const Error = (props) => {

    const error = useSelector(state => state.error)

    const history = useHistory()

    const handleBackButtonClick = (history) => {

        history.push('/')
    }

    const handleErrorMessage = (errorMessage) => {

        return (
            <div className="error-alert">
                 <Container fluid >
                    <Row>
                        <Col>
                            <Alert variant="primary" className="alert-div" >
                                {errorMessage}
                            </Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="info" 
                                    onClick={() => handleBackButtonClick(history)}>
                                Go Back
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    if (typeof error === 'string') {
    
        return handleErrorMessage(error)
    }
    else {

        return handleErrorMessage('Nothing to show here!!')
    }
}

export default Error