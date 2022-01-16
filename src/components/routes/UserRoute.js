import React from 'react'
import { Redirect, Route } from 'react-router'

const UserRoute = ({component: Component, role, isLoggedIn, ...other}) => (
    <Route {...other} render={props => {

        if (!isLoggedIn) {

            return <Redirect to={{ pathname: '/login', state: {from: props.location}}}/>
        }

        if (role !== 'USER') {

            return <Redirect to={{ pathname: '/login', state: {from: props.location}}}/>
        }

        return <Component {...props}/>
    }}/>
)

export default UserRoute
