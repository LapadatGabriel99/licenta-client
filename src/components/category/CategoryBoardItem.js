import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { deleteCategory } from '../../actions/category/categoryActions'
import '../../styles/Misc.css'

function CategoryBoardItem(props) {

    const { id, testType } = props

    const history = useHistory()

    const dispatch = useDispatch()

    const onDeleteHandler = (id) => {

        const removeCategory = async (id) => {

            await dispatch(deleteCategory(id, history))
        }

        removeCategory(id)

        window.location.reload()
    }

    return (
        <Card className="bg-light mb-1 text-center mt-4 page-header-shadow">
            <Card.Header className="text-dark bg-light">
                <Link to={`/category-page/${id}`}
                      className="btn btn-success ml-4">
                    <div className="fas fa-edit"/>
                    <span className="card-header-area"> Update Category</span>
                </Link>
                <Button className="btn-danger ml-4"
                        onClick={() => onDeleteHandler(id)}>
                    <div className="fas fa-minus-circle"/>
                    <span className="card-header-area"> Remove Category</span>
                </Button>
            </Card.Header>
            <Card.Body className="bg-light">
                <Card.Title className="card-body-area text-dark">Id: {id}</Card.Title>
                <Card.Text className="text-truncate card-body-area fs-4 text-dark">
                    Test Type: {testType}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-light card-footer-area"></Card.Footer>
        </Card>
    )
}

export default CategoryBoardItem
