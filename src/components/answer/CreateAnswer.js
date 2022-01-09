import React from 'react'
import '../../App.css'
import '../../styles/Create.css'
import useForm from '../../hooks/useForm'
import { Form, FormGroup, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createAnswer } from '../../actions/answer/answerActions'

const initialFormValues = {
    answerText: "",
    correct: false
}

function CreateAnswer(props) {

    const { testId, questionId } = props

    const dispatch = useDispatch()

    const history = useHistory()

    const [reload, setReload] = useState(false)

    useEffect(() => {

    },[])

    useEffect(() => {

    }, [reload])

    const validate = (fieldValues = values) => {
        let temp= {...errors}

        if ('answerText' in fieldValues) {
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

    const onCreateAnswerHandler = (e) => {

        e.preventDefault()

        const post = async () => {

            await dispatch(createAnswer(questionId, {
                answerText: values.answerText,
                correct: values.correct
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
                    <h3 className="font-weight-normal font-quicksand">
                        Add Answer
                    </h3>
                    <Form className="create-form" onSubmit={onCreateAnswerHandler}>
                        <FormGroup className="form-group-spacing">
                            <Form.Control type="text"
                                            name="answerText"
                                            value={values.answerText}
                                            placeholder="Enter answer"
                                            onChange={handleInputChange}
                                            errors={values.errors}/>
                        </FormGroup>
                        <FormGroup className="form-group-spacing">
                            <Form.Control type="checkbox"
                                            className="form-check-input"
                                            name="correct"
                                            checked={values.correct}
                                            onChange={handleInputChange}/>
                        </FormGroup>
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

export default CreateAnswer
