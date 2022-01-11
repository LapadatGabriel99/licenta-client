import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { shallowEqual } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCategories, getCategory, updateCategory } from '../../actions/category/categoryActions'
import { getTest, updateTest } from '../../actions/test/testActions'
import useForm from '../../hooks/useForm'
import '../../styles/Create.css'

const initialFormValues = {
    'id': '',
    'name': '',
    categoryId: '',
    categoryName: ''
}

function UpdateTest(props) {

    const { testId } = props

    const dispatch = useDispatch()

    const categories = useSelector(state => state.category.categories)

    const test = useSelector(state => state.test.test)

    const history = useHistory()

    const [reload, setReload] = useState(false)

    useEffect(() => {

        const fetchData = async (id) => {

            await dispatch(getTest(id, history))

            await dispatch(getCategories(history))
        
            setReload(prev => !prev)
        }

        fetchData(testId)
    }, [])

    useEffect(() => {

        setValues(prev => {

            return {
                id: test.id,
                name: test.name
            }
        })
    }, [reload])

    const validate = (fieldValues = values) => {
        let temp = {...errors}

        if ('name' in fieldValues) {
            temp.name = fieldValues.name ? '' : 'This field is required'
        }

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const [ values, 
        setValues, 
        errors, 
        setErrors, 
        handleInputChange, 
        resetForm ] = useForm(initialFormValues, true, validate)

    const onSelectListChangedHandler = (e) => {

        const index = e.target.selectedIndex

        if(e.target[index].value == null || e.target[index].value === "") {
            window.alert("Please select a valid category!")
            return
        }

        const category = categories.filter(c => c.testType === e.target.value)
        setValues(prev => {
            return {
                ...prev,
                categoryId: category[0].id,
                categoryName: e.target.value
            }
        })
    }

    const onSubmitHandler = (e) => {

        e.preventDefault()

        const put = async () => {

            await dispatch(updateTest({
                'id': values.id,
                'name': values.name,
                'categoryId': values.categoryId,
                'categoryName': values.categoryName
            }, history))
        }

        if (validate()) {

            put()
        }
    }

    const categoryList = () => {

        if (categories != null) {
            let items = [];

            items.push(<option key="" value="">Select category</option>)

            for (let i = 0; i < categories.length; i++) {

                const element = categories[i]
                items.push(<option key={element.id} value={element.testType}>
                                {element.testType}
                            </option>)
            }

            return(
                <select className="form-control form-control-lg form-group-spacing"
                        name="category"
                        value={values.categoryName}
                        onChange={onSelectListChangedHandler}>
                        {
                            items
                        }
                </select>
            )
        }
    }

    return (
        <Container className="text-center">
            <Row>
                <Col className="m-auto">
                    <h3 className="font-weight-normal">Update Test</h3>
                    <Form className="create-form" onSubmit={onSubmitHandler}>
                        <Form.Group className="form-group-spacing">
                            <Form.Label>Test Name</Form.Label>
                            <Form.Control type="text"
                                          placeHolder="Test name"
                                          name="name"
                                          value={values.name}
                                          onChange={handleInputChange}
                                          error={errors.name}/>
                        </Form.Group>
                        <Form.Group>
                            {
                                categoryList()
                            }
                        </Form.Group>
                        <div className="d-grid gap-2 mt-4">
                            <Button className="btn-lg btn-dark"
                                type="submit"
                                > 
                                Update
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default UpdateTest
