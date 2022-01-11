import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getQuestion, updateQuestion } from '../../actions/question/questionActions'
import useForm from '../../hooks/useForm'
import '../../styles/Create.css'

const initialFormValues = {
    questionText: ""
}

function UpdateQuestion(props) {

    const {testId, questionId } = props

    const dispatch = useDispatch()

    const question = useSelector(state => state.question.question)

    const history = useHistory()

    const [reload, setReload] = useState(false)

    useEffect(() => {

        const fetchData = async (id) => {

            await dispatch(getQuestion(id, history))

            setReload(prev => !prev)
        }

        fetchData(questionId)
    }, [])

    useEffect(() => {

        setValues(prev => {

            return {
                questionText: question.questionText
            }
        })
    }, [reload])

    const validate = (fieldValues = values) => {
        let temp = {...errors}

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

    const onUpdateQuestionHandler = (e) => {

        e.preventDefault()

        const put = async () => {

            await dispatch(updateQuestion(questionId, {
                'questionText': values.questionText
            }, history))
        }

        if (validate()) {

            put()

            window.location.reload()
        }

        put()

        window.location.reload()
    }

    return (
        <Container className="text-center">
            <Row>
                <Col className="m-auto">
                    <h3>Update Question</h3>
                    <Form className="create-from" onSubmit={onUpdateQuestionHandler}>
                        <Form.Group className="form-group-spacing">
                            <Form.Control type="text"
                                            placeholder="Question text"
                                            name="questionText"
                                            value={values.questionText}
                                            onChange={handleInputChange}
                                            errors={values.errors}/>
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

export default UpdateQuestion
