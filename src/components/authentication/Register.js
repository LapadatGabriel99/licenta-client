import React from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap'
import '../../styles/Login.css'
import '../../App.css'

const Register = () => {
    return (
        <Form className="login-form">
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
                              />
            </FormGroup>
            <FormGroup className="form-group-spacing">
                <Form.Label>Email</Form.Label>
                <Form.Control type='text'
                              placeholder='Enter email'
                              name='email'/>
            </FormGroup>
            <FormGroup className="form-group-spacing">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' 
                              placeholder='Enter password'
                              name='password'
                              />
            </FormGroup>
            <FormGroup className="form-group-spacing">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password'
                              placeholder='Confirm password'
                              name='confirmPassword'/>
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

