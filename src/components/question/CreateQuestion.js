import React from 'react'
import '../../App.css'
import '../../styles/Create.css'
import useForm from '../../hooks/useForm'
import { Form, FormGroup, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createTest } from '../../actions/test/testActions'
import { useEffect, useState } from 'react'
import { createQuestion } from '../../actions/question/questionActions'

const initialFormValues = {
    questionText: "",
    hasMultipleAnswers: false
}

function CreateQuestion(props) {

    const { testId } = props

    const dispatch = useDispatch()

    const history = useHistory()

    const [reload, setReload] = useState(false)

    useEffect(() => {

    },[])

    useEffect(() => {

    }, [reload])

    const validate = (fieldValues = values) => {
        let temp= {...errors}

        if ('questionText' in fieldValues) {
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

    const onCreateQuestionHandler = (e) => {
        e.preventDefault()

        const post = async () => {

            await dispatch(createQuestion(testId, {
                'questionText': values.questionText,
                'hasMultipleAnswers': values.hasMultipleAnswers
            }, history))
        }

        if (validate()) {

            post()
        }
    }

    return (
        <Container className="text-center">
            <Row>
                <Col className="m-auto">
                    <h3 className="font-weight-normal">Add Question</h3>
                    <Form className="create-form" onSubmit={onCreateQuestionHandler}>
                        <Form.Group className="form-group-spacing">
                            <Form.Label>Question Text</Form.Label>
                            <Form.Control type='text'
                                            placeholder='Enter question...'
                                            name="questionText"
                                            value={values.questionText}
                                            onChange={handleInputChange}
                                            errors={errors.name}/>
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

export default CreateQuestion
