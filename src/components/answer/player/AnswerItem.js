import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../../../styles/Misc.css'

function AnswerItem(props) {

    const { key, questionKey, answer, testId, questionHasMultipleAnswers } = props

    let answerId = `answer-${questionKey}.${key}`;

    const dispatch = useDispatch()

    const history = useHistory()

    const [reload, setReload] = useState(false)

    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [reload])

    const answerType = (questionHasMultipleAnswers, answerId, answerText) => {

        if (questionHasMultipleAnswers) {

            return (
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id={answerId} 
                            checked={isChecked} onChange={() => setIsChecked(prev => !prev)}/>
                    <label className="form-check-label font-quicksand" 
                            for={answerId}>{answerText}</label>
                </div>                    
            )
        }
        else {
            
            return (
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id={answerId}/>
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
