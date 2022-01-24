import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { deleteTest } from '../../actions/test/testActions'
import '../../styles/Misc.css'

function TestBoardItem(props) {

    const { id, name, categoryName } = props

    const history = useHistory()

    const dispatch = useDispatch()

    const onDeleteHandler = (id) => {

        const removeTest = async (id) => {

            await dispatch(deleteTest(id, history))
        }

        removeTest(id)

        window.location.reload()
    }
    
    return (
        <Card className="bg-light mb-1 text-center mt-4 page-header-shadow border-0">
            <Card.Header className="text-dark bg-light">
                <Link to={`/test-page/${id}`} className="btn btn-success ml-4 float-right">
                    <div className="fas fa-edit"/>
                    <span className="card-header-area"> Update Test</span>
                </Link>
                <Button className="btn-danger ml-4 float-right"
                        onClick={() => onDeleteHandler(id)}>
                    <div className="fas fa-minus-circle"/>
                    <span className="card-header-area"> Remove Test</span>
                </Button>
            </Card.Header>
            <Card.Body className="bg-light">
                <Card.Title className="card-body-area text-dark">Name: {name}</Card.Title>
                <Card.Text className="text-truncate card-body-area fs-4 text-dark">
                    Category: {categoryName}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-light card-footer-area"></Card.Footer>
        </Card>
    )
}

export default TestBoardItem
