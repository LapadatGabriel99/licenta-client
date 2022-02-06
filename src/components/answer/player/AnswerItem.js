import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ADD_ANSWER_QUIZ, REMOVE_ANSWER_QUIZ } from '../../../actions/types'
import '../../../styles/Misc.css'

function AnswerItem(props) {

    const { key, questionId, questionKey, answer, testId, questionHasMultipleAnswers } = props

    let answerId = `answer-${questionKey}.${key}`;

    const dispatch = useDispatch()

    const history = useHistory()

    const [reload, setReload] = useState(false)

    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [reload])

    useEffect(() => {
    
        const payload = {
            'answerId': answer.id,
            'questionId': questionId,
        }

        if (isChecked === true) {

            dispatch({
                type: ADD_ANSWER_QUIZ,
                payload: payload,
                testId: testId
            })
        }

        if (isChecked === false) {

            dispatch({
                type: REMOVE_ANSWER_QUIZ,
                payload: {
                    'answerId': answer.id,
                }
            })
        }
    }, [isChecked])

    const answerType = (questionHasMultipleAnswers, answerId, answerText) => {

        if (questionHasMultipleAnswers) {

            return (
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id={answerId} 
                            checked={isChecked} onChange={() => { setIsChecked(prev => !prev)}}/>
                    <label className="form-check-label font-quicksand" 
                            for={answerId}>{answerText}</label>
                </div>                    
            )
        }
        else {
            
            return (
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id={answerId}
                            checked={isChecked} onChange={() => { setIsChecked(prev => !prev)}}/>
                    <label className="form-check-label font-quicksand" 
                            for={answerId}>{answerText}</label>
                </div>
            )
        }
    }

    return (
        <React.Fragment>
            {answerType(questionHasMultipleAnswers, answerId, answer.answerText)}
        </React.Fragment>
    )
}

export default AnswerItem
