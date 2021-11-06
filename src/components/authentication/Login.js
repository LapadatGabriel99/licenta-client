import React from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap'
import '../../styles/Login.css'
import '../../App.css'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { login } from '../../actions/authentication/authenticationActions'

const initialFormValues = {
    username: '',
    password: ''
}

const Login = (props) => {

    const dispatch = useDispatch()

    const history = useHistory()

    const validate = (fieldValues = values) => {
        let temp = {...errors}

        if ('username' in fieldValues) {
            temp.username = fieldValues.username ? '' : 'This field is required'
        }

        if ('password' in fieldValues) {
            temp.password = fieldValues.password ? '' : 'This field is required'
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

    const onLoginButtonClick = (e) => {

        e.preventDefault()

        const post = async () => {

            await dispatch(login({
                'username': values.username,
                'password': values.password
            }, history))
        }

        if (validate()) {

            post()
        }
    }

    return (
        <Form className="login-form" onSubmit={onLoginButtonClick}>
            <div className="center-oriented-content">
                <h1>
                    <span className="font-weight-bold">User Test Tool</span>.com
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
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' 
                              placeholder='Enter password'
                              name='password'
                              value={values.password}
                              onChange={handleInputChange}
                              error={errors.password}/>
            </FormGroup>
            <div className="d-grid gap-2 mt-4">
                <Button className="btn-lg btn-dark"
                    type="submit"
                    > 
                    Sign in
                </Button>
            </div>
            <div className="center-oriented-content login-end-links">
                <a href="/">Home</a>
                <span className="p-2">|</span>
                <a href="#">Forgot password</a>
            </div>
        </Form>
    )
}

export default Login
