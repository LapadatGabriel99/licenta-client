import React from 'react'
import { Redirect, Route } from 'react-router'

const SecuredRoute = ({component: Component, isLoggedIn, ...other}) => (
    <Route {...other} render={props => {

        if (!isLoggedIn) {

            return <Redirect to={{ pathname: '/login', state: {from: props.location}}}/>
        }

        return <Component {...props}/>
    }}/>
)

export default SecuredRoute