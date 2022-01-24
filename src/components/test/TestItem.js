import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { deleteTest } from '../../actions/test/testActions'
import '../../styles/Misc.css'

function TestItem(props) {

    const { test, categoryId } = props

    const dispatch = useDispatch()

    const history = useHistory()

    const onDeleteHandler = (id) => {

        const removeTest = async (id) => {

            await dispatch(deleteTest(id, history))
        }

        removeTest(id)

        window.location.reload()
    }

    return (
        <Card className="mb-1 bg-dark shadow-button card-area-category-page border-0">
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
            <Card.Footer className="bg-dark card-footer-area-category-page"></Card.Footer>
        </Card>
    )
}

export default TestItem
