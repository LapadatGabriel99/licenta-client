import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { deleteTest } from '../../actions/test/testActions'

function TestItem(props) {

    const { test } = props

    const dispatch = useDispatch()

    const history = useHistory()

    const onDeleteHandler = (id) => {

        const removeTest = async (id) => {

            await dispatch(deleteTest(id, history))
        }

        removeTest(id)
    }

    return (
        <Card className="mb-1 bg-dark">
            <Card.Header className="text-primary">
                <Card.Title className="text-white">{test.name}</Card.Title>
            </Card.Header>
            <Card.Body className="bg-light">
                <Link to={`/test-page/${test.id}`} className="btn btn-success ml-4">
                    <div className="fas fa-arrow-up"> Update test</div>
                </Link>
                <Button className="btn-danger ml-4"
                        onClick={() => onDeleteHandler(test.id)}>
                    <div className="fas fa-minus-circle"> Delete test</div>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default TestItem
