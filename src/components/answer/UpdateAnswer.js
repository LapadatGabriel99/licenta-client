import React from 'react'
import '../../App.css'
import '../../styles/Create.css'
import useForm from '../../hooks/useForm'
import { Form, FormGroup, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAnswer, updateAnswer } from '../../actions/answer/answerActions'

const initialFormValues = {
    answerText: "",
    correct: false
}

function UpdateAnswer(props) {

    const { testId, answerId } = props

    const answer = useSelector(state => state.answer.answer)

    const dispatch = useDispatch()

    const history = useHistory()

    const [reload, setReload] = useState(false)

    useEffect(() => {

        const fetchAnswer = async () => {

            await dispatch(getAnswer(testId, answerId, history))

            setReload(prev => !prev)
        }

        fetchAnswer()
    },[])

    useEffect(() => {

        setValues(prev => {

            return {
                answerText: answer.answerText,
                correct: answer.correct
            }
        })

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

    const onUpdateAnswerHandler = (e) => {

        e.preventDefault()

        const put = async () => {

            await dispatch(updateAnswer(answerId, {
                answerId: answerId,
                answerText: values.answerText,
                correct: values.correct
            }, history))
        }

        put()

        window.location.reload()
    }

    const onChangeChecked = (e) => {

        const { name, checked } = e.target
        setValues({
            ...values,
            [name]: checked
        })
    }

    return (
        <Container className="text-center">
            <Row>
                <Col className="m-auto">
                    <h3 className="font-quicksand">
                        Update Answer
                    </h3>
                    <Form className="create-form" onSubmit={onUpdateAnswerHandler}>
                        <Form.Group className="form-group-spacing">
                            <Form.Control type="text"
                                            name="answerText"
                                            placeholder='Enter answer'
                                            value={values.answerText}
                                            onChange={handleInputChange}
                                            errors={values.errors}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="checkbox"
                                            className="form-check-input"
                                            name="correct"
                                            checked={values.correct}
                                            onChange={onChangeChecked}/>
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

export default UpdateAnswer
