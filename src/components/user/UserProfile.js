import React, { useEffect, useState } from 'react'
import { Col, Container, Form, FormGroup, Row, Button } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getUserDetails, updateUserDetails } from '../../actions/user/userActions'
import '../../styles/Profile.css'
import '../../App.css'
import useForm from '../../hooks/useForm'
import { sleep } from '../../services/miscService'

const initialFormValues = {
    id: '',
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '********'
}

function UserProfile(props) {

    const userState = useSelector(state => state.user, shallowEqual)

    const dispatch = useDispatch()

    const [reload, setReload] = useState(false)

    const history = useHistory()

    useEffect(() => {

        const fetchUser = async () => {

            await dispatch(getUserDetails(history))

            setReload(prev => !prev)
        }

        fetchUser()
    }, [])

    useEffect(() => {

        console.log(userState)

        setValues(prev => {
           
            return {
                id: userState.id,
                username: userState.username,
                firstname: userState.firstname,
                lastname: userState.lastname,
                email: userState.email,
                password: prev.password
            }
        })
    }, [reload])

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

    const updateBntClick = (e) => {

        e.preventDefault()    

        const postValidationChecks = () => {

            if (values.password === '********') {

                alert('Please set your new password')

                return false;
            }

            if (values.username === userState.username) {

                alert('Please set a new username')

                return false;
            }

            if (values.email === userState.email) {

                alert('Please set a new email')

                return false;
            }

            return true;
        }

        const post = async () => {

            await dispatch(updateUserDetails({
                'id': values.id,
                'username': values.username,
                'firstname': values.firstname,
                'lastname': values.lastname,
                'email': values.email,
                'password': values.password
            }, history))
        }

        if (validate()) {

            if (postValidationChecks()) {

                post()
                sleep(2500).then(() => setReload(prev => !prev))
            }
        }
    } 

    return (
        <Form className="profile-form" onSubmit={updateBntClick}>
            <div className="center-oriented-content">
                <h2 className="profile-title">User Details</h2>
            </div>
            <FormGroup className="form-group-spacing">
                <Form.Label>Username</Form.Label>
                <Form.Control   type='text'
                                placeholder='Enter username'
                                name='username'
                                value={values.username}
                                onChange={handleInputChange}
                                error={errors.username}/>
            </FormGroup>
            <FormGroup className="form-group-spacing">
                <FormGroup>First Name</FormGroup>
                <Form.Control type='text'
                              placeholder='Enter first name'
                              name='firstname'
                              value={values.firstname}
                              onChange={handleInputChange}
                              error={errors.firstname}/>
            </FormGroup>
            <FormGroup className="form-group-spacing">
                <FormGroup>Last Name</FormGroup>
                <Form.Control type='text'
                              placeholder='Enter last name'
                              name='lastname'
                              value={values.lastname}
                              onChange={handleInputChange}
                              error={errors.lastname}/>
            </FormGroup>
            <FormGroup className="form-group-spacing">
                <Form.Label>Email</Form.Label>
                <Form.Control   type='text'
                                placeholder='Enter email'
                                name='email'
                                value={values.email}
                                onChange={handleInputChange}
                                error={errors.email}/>
            </FormGroup>
            <FormGroup className="form-group-spacing">
                <Form.Label>Password</Form.Label>
                <Form.Control   type='password'
                                placeholder='Enter password'
                                name='password'
                                value={values.password}
                                onChange={handleInputChange}
                                error={errors.password}/>
            </FormGroup>
            <div className="d-grid gap-2 mt-4">
                <Button className="btn-lg btn-dark btn-block"
                    type='submit'>
                    Update Profile
                </Button>
            </div>
        </Form>
    )
}

export default UserProfile
