import React, { useEffect, useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap'
import { shallowEqual } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCategory } from '../../actions/category/categoryActions'
import TestItem from '../test/TestItem'
import UpdateCategory from './UpdateCategory'

function CategoryPage(props) {

    const { categoryId } = props.match.params

    const category = useSelector(state => state.category.category)

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

    const [show, setShow] = useState(false)

    const history = useHistory()

    useEffect(() => {

        const fetchCategory = async (id) => {

            await dispatch(getCategory(history, id))

            setReload(prev => !prev)
        }

        fetchCategory(categoryId)
    }, [])

    useEffect(() => {

    }, [reload])

    let categoryPageContent
    let updateCategoryContent
    let testItems = []

    const createCategoryPage = tests => {
        if (tests.length < 1) {
            return (
                <div className = "alert alert-info text-center" role = "alert">
                    No Tests
                </div>
            )
        }
        else {

            const testList = tests.map(test => (
                <TestItem key={test.id} test={test} categoryId={category.id}/>
            ))

            for(let i = 0; i < testList.length; i++) {
                testItems.push(testList[i])
            }

            return(
                <React.Fragment>
                    <Container>
                        {testItems}
                    </Container>
                </React.Fragment>
            )
        }
    }

    const createUpdateCategory = () => {
        if (category.id !== "") {

            const updateCategory = <UpdateCategory key={category.id} id={category.id}/>

            return(
                <React.Fragment>
                    <Container>
                        {updateCategory}
                    </Container>
                </React.Fragment>
            )
        }
    }

    categoryPageContent = createCategoryPage(category.testDTOS)
    updateCategoryContent = createUpdateCategory()

    return(
        <Container className="text-center">
            <h1>{category.testType}</h1>
            <br/>
            <Container>
                <Button className="btn-success ml-4" onClick={() => setShow(prev => !prev)}>
                    <div className="fas fa-arrow-up"> Update</div>
                </Button>
            </Container>
            <br />
            <p />
            {categoryPageContent}
            <Modal show={show} centered>
                <Modal.Body>
                    {updateCategoryContent}
                </Modal.Body>
                <Modal.Footer>
                    <Container className="text-center">
                        <Button className="btn-danger ml-4" onClick={() => setShow(prev => !prev)}>
                            <div className="fas fa-window-close"> Close</div>
                        </Button>
                    </Container>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default CategoryPage
