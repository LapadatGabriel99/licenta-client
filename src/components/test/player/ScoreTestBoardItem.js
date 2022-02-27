import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../../../styles/Misc.css'

function ScoreTestBoardItem(props) {

    const { id, name, categoryName, numOfCorrectAnswers, numOfWrongAnswers, wasTestModified} = props

    return (
        <Card className="bg-light mb-1 text-center mt-4 page-header-shadow border-0">
            <Card.Header className="text-dark bg-light">
                <Container className="w-50">
                    <Row>
                        <Col>
                            <h3 className="text-center d-inline font-quicksand card-title">
                                Name: {name}
                            </h3>
                        </Col>
                        <Col>
                            <h3 className="text-center d-inline font-quicksand card-title">
                                Category: {categoryName}
                            </h3>
                        </Col>
                    </Row>
                </Container>
            </Card.Header>
            <Card.Body className="bg-light">
                <Card.Text className="font-quicksand fs-4">
                  Was Modified: {wasTestModified}
                </Card.Text>
                <Card.Text className="font-quicksand fs-4">
                  Correct Answers: {numOfCorrectAnswers}
                </Card.Text>
                <Card.Text className="font-quicksand fs-4">
                  Wrong Answers: {numOfWrongAnswers}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ScoreTestBoardItem;
