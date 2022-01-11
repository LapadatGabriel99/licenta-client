import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { shallowEqual } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCategory, updateCategory } from '../../actions/category/categoryActions'
import useForm from '../../hooks/useForm'
import { sleep } from '../../services/miscService'
import '../../styles/Create.css'

const initialFormValues = {
    id: '',
    testType: ''
}

function UpdateCategory(props) {

    const { id } = props

    const dispatch = useDispatch()

    const category = useSelector(state => state.category.category)

    const history = useHistory()

    const [reload, setReload] = useState(false)

    useEffect(() => {

        const fetchCategory = async (id) => {

            await dispatch(getCategory(id, history))

            setReload(prev => !prev)
        }

        fetchCategory(id)
    }, [])

    useEffect(() => {

        setValues(prev => {

            return {
                id: category.id,
                testType: category.testType
            }
        })
    }, [reload])

    const validate = (fieldValues = values) => {
        let temp = {...errors}

        if ('testType' in fieldValues) {
            temp.testType = fieldValues.testType ? '' : 'This field is required'
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

    const onSubmitHandler = (e) => {

        e.preventDefault()

        const categoryDTO = {
            id: values.id,
            testType: values.testType
        }

        if (category.testType === "") {

            return (window.confirm("Category name cannot be empty"))
        }

        const put = async () => {

            await dispatch(updateCategory(categoryDTO, history))
        }

        put()

        window.location.reload()
    }

    return (
        <Container className="text-center">
            <Row>
                <Col className="col-md-8 m-auto">
                    <h3 className="font-weight-normal">Update category</h3>
                    <Form className="create-form" onSubmit={onSubmitHandler}>
                        <Form.Group className="form-group-spacing">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control   type="text"
                                            name="testType"
                                            value={values.testType}
                                            placeholder="Category name"
                                            onChange={handleInputChange}
                                            errors={errors.testType}/>
                        </Form.Group>
                        <div className="d-grid gap-2 mt-4">
                            <Button className="btn-lg btn-dark btn-block"
                                type='submit'>
                                Update Category
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default UpdateCategory
