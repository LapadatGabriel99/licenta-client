import React from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap'
import '../../../styles/Login.css'
import '../../../App.css'
import { register } from '../../../actions/authentication/authenticationActions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import useForm from '../../../hooks/useForm'

const initialFormValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Register = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const validate = (fieldValues = values) => {
        let temp = {...errors}

        if ('username' in fieldValues) {
            temp.username = fieldValues.username ? '' : 'This field is required'
        }

        if ('email' in fieldValues) {
            temp.email = fieldValues.email ? '' : 'This field is required'
        }

        if ('password' in fieldValues) {
            temp.password = fieldValues.password ? '' : 'This field is required'
        }

        if ('confirmPassword' in fieldValues) {
            temp.confirmPassword = fieldValues.confirmPassword ? '' : 'This field is required'
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

    const onRegisterButtonClick = (e) => {

        e.preventDefault()

        const post = async () => {

            await dispatch(register({
                'username': values.username,
                'email': values.email,
                'password': values.password,
                'confirmPassword': values.confirmPassword,
                'roles': [{
                    'name': 'PLAYER' 
                }]
            }, history))
        }

        if (validate()) {

            post()
        }
    }

    return (
        <Form className="login-form" onSubmit={onRegisterButtonClick}>
            <div className="center-oriented-content">
                <h1>
                    <span className="font-weight-bold">Player Test Tool</span>.com
                </h1>
                <h2 className="text-center">Welcome</h2>
            </div>
            <FormGroup className="form-group-spacing">
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' 
                              placeholder='Enter username'
                              name='username'
                              value={values.username}
                              onChange={handleInputChange}
                              error={errors.username}/>
            </FormGroup>
            <FormGroup className="form-group-spacing">
                <Form.Label>Email</Form.Label>
                <Form.Control type='text'
                              placeholder='Enter email'
                              name='email'
                              value={values.email}
                              onChange={handleInputChange}
                              error={errors.email}/>
            </FormGroup>
            <FormGroup className="form-group-spacing">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' 
                              placeholder='Enter password'
                              name='password'
                              value={values.password}
                              onChange={handleInputChange}
                              error={errors.password}/>
            </FormGroup>
            <FormGroup className="form-group-spacing">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password'
                              placeholder='Confirm password'
                              name='confirmPassword'
                              value={values.confirmPassword}
                              onChange={handleInputChange}
                              error={errors.confirmPassword}/>
            </FormGroup>
            <div className="d-grid gap-2 mt-4">
                 <Button className="btn-lg btn-dark"
                    type="submit"
                    > 
                    Register
                </Button>
            </div>
        </Form>
    )
}

export default Register

