import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getCategories } from '../../actions/category/categoryActions'
import CategoryBoardItem from './CategoryBoardItem'
import CreateCategory from './CreateCategory'

function CategoryBoard(props) {

    const categories = useSelector(state => state.category.categories)

    const userState = useSelector(state => state.user, shallowEqual)

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

    const [show, setShow] = useState(false)

    const history = useHistory()

    useEffect(() => {

        const fetchCategories = async (id) => {

            await dispatch(getCategories(history, id))

            setReload(prev => !prev)
        }

        fetchCategories(userState.id)
    }, [])

    useEffect(() => {

    }, [reload])

    let boardContent;
    let modalContent;
    let boardItems;

    const createCategory = () => {
        const newCategory = <CreateCategory history={history}/>

        return(
            <React.Fragment>
                <Container>
                    {newCategory}
                </Container>
            </React.Fragment>
        )
    }

    modalContent = createCategory()

    const createBoard = categories => {
        if (categories.length < 1) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <Button className="btn-primary mb-4" 
                                    onClick={() => setShow(prev => !prev)}>
                                <i className="fas fa-plus-circle"> Create Category</i>
                            </Button>
                            <div className="alert alert-info text-center" role="start">
                                No categories available here!
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }

        boardItems = categories.map(category => (
            <CategoryBoardItem id={category.id}
                           testType={category.testType}/>
        ));

        return(
            <Container>
                <Row>
                    <Col>
                        <Button className="btn-primary mb-4"
                                onClick={() => setShow(prev => !prev)}>
                            <div className="fas fa-plus-circle"></div>
                            <span className="font-quicksand"> Add Category</span>
                        </Button>
                        <Card className="text-center mb-2">
                            <Card.Header className="bg-primary text-white">
                                <h3 className="font-quicksand">Categories</h3>
                            </Card.Header>
                        </Card>
                        {boardItems}
                    </Col>
                </Row>
            </Container>
        )
    }

    boardContent = createBoard(categories)

    return (
        <Container>
            {boardContent}
            <Modal show={show} centered>
                <Modal.Header>
                    <Container className="text-right">
                        <Button className="btn-danger ml-4"
                                onClick={()=> {
                                    setShow(prev => !prev)
                                    window.location.reload()
                                }}/>
                    </Container>
                </Modal.Header>
                <Modal.Body>
                    {modalContent}
                    <br/>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default CategoryBoard
