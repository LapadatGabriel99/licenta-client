import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getCategories } from '../../actions/category/categoryActions'

function CategoryBoard(props) {

    const categories = useSelector(state => state.category.categories)

    const userState = useSelector(state => state.user, shallowEqual)

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

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

    return (
        <Container fluid className="">
            <Row className="">
                <Col className>
                    <div>
                        <h3>
                            List of categories
                        </h3>
                    </div>
                </Col>
            </Row>
            <Row className="">

            </Row>
        </Container>
    )
}

export default CategoryBoard
