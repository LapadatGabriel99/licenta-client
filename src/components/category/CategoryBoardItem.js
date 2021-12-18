import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { deleteCategory } from '../../actions/category/categoryActions'

function CategoryBoardItem(props) {

    const { id, testType } = props

    const history = useHistory()

    const onDeleteHandler = (id) => {

        deleteCategory(id, history)
    }

    return (
        <Card className="bg-light mb-1 text-center mt-4">
            <Card.Header className="text-dark">
                <Card.Title className="text-center d-inline font-quicksand">
                    {id}
                </Card.Title>
                <Link to={`/category-page/${id}`}
                      className="btn btn-success ml-4">
                    <div className="fas fa-edit"/>
                </Link>
                <Button className="btn-danger ml-4"
                        onClick={() => onDeleteHandler(id)}>
                    <div className="fas fa-minus-circle"/>
                </Button>
            </Card.Header>
            <Card.Body className="bg-light">
                <Card.Title className="font-quicksand">Test Type: </Card.Title>
                <Card.Text className="text-truncate font-quicksand fs-4">
                    {testType}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CategoryBoardItem
