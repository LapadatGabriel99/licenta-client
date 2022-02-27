import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import '../../../styles/Misc.css'

function TestBoardItem(props) {

    const { id, name, categoryName, wasTaken } = props

    const ifTestWasTaken = () => {

        if (wasTaken) {

            return(
                <Link to={`/player/update-test-page/${id}`} 
                                className="btn btn-success ml-4 float-right">
                    <i class="fa fa-edit"></i>
                </Link>
                
            )
        }
        else {

            return(
                <Link to={`/player/test-page/${id}`} 
                                className="btn btn-success ml-4 float-right">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </Link>
            )
        }
    }

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
                            {ifTestWasTaken()}
                        </Col>
                    </Row>
                </Container>
            </Card.Header>
            <Card.Body className="bg-light">
                <Card.Title className="font-quicksand">Category: </Card.Title>
                <Card.Text className="text-truncate font-quicksand fs-4">
                    {categoryName}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TestBoardItem
