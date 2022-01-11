import React from 'react'
import '../../App.css'
import '../../styles/Create.css'
import useForm from '../../hooks/useForm'
import { Form, FormGroup, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createTest } from '../../actions/test/testActions'
import { useEffect, useState } from 'react'
import { getCategories } from '../../actions/category/categoryActions'

const initialFormValues = {
    name: '',
    categoryName: '',
    categoryId: ''
}

function CreateTest(props) {

    const dispatch = useDispatch()

    const history = useHistory()

    const [reload, setReload] = useState(false)

    const categories = useSelector(state => state.category.categories)

    useEffect(() => {

        const fetchCategories = async () => {

            await dispatch(getCategories(history))

            setReload(prev => !prev)
        }

        fetchCategories()
    }, [])

    useEffect(() => {

        console.log(categories)
    }, [reload])

    const validate = (fieldValues = values) => {
        let temp= {...errors}

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

    const onCreateTestHandler = (e) => {

        e.preventDefault()

        const post = async () => {

            await dispatch(createTest({
                'name': values.name,
                'categoryId': values.categoryId,
                'categoryName': values.CategoryName
            }, history))
        }

        if (validate()) {

            post()
        }
    }

    const onSelectListChangedHandler = (e) => {
        if (e.target.value == null || e.target.value === "") {
            window.alert("Please select a valid category!");
            return;
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
                <select className="form-control form-control-lg"
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
                    <h3 className="font-weight-normal">Add Test</h3>
                    <Form className="create-form" onSubmit={onCreateTestHandler}>
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
                                Create
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateTest
