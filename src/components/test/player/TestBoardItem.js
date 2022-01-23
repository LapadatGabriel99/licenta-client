import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

function TestBoardItem(props) {

    const { id, name, categoryName } = props

    return (
        <Card className="bg-light mb-1 text-centermt-4">
            <Card.Header className="text-dark">
                <h3 className="text-center d-inline font-quicksand card-title">
                    Name: {name}
                </h3>
                <Link to={`/player/test-page/${id}`} className="btn btn-success ml-4 float-right">
                    <div className="fas fa-edit"/>
                </Link>
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
