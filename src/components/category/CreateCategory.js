import React from 'react'
import '../../App.css'
import '../../styles/Create.css'
import useForm from '../../hooks/useForm'
import { Form, FormGroup, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createCategory } from '../../actions/category/categoryActions'

const initialFormValues = {
    testType: ''
}

function CreateCategory(props) {

    const dispatch = useDispatch()

    const history = useHistory()

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

    const onCreateCategoryHandler = (e) => {

        e.preventDefault()

        const post  = async () => {

            await dispatch(createCategory({
                'testType': values.testType
            }, history))
        }

        if (validate()) {

            post()
        }
    }

    return (
        <Container className="text-center">
            <Row>
                <Col className="m-auto" >
                    <h3 className="font-weight-normal">Add Category</h3>
                    <Form className="create-form" onSubmit={onCreateCategoryHandler}>
                        <Form.Group className="form-group-spacing">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control type='text'
                                          placeholder='Category name'
                                          name='testType'
                                          value={values.testType}
                                          onChange={handleInputChange}
                                          error={errors.testType}/>
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

export default CreateCategory
