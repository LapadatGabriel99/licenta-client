import React from 'react'
import { Redirect, Route } from 'react-router'

const PlayerRoute = ({component: Component, role, isLoggedIn, ...other}) => (
    <Route {...other} render={props => {

        if (!isLoggedIn) {

            return <Redirect to={{ pathname: '/login', state: {from: props.location}}}/>
        }

        if (role !== 'PLAYER') {

            return <Redirect to={{ pathname: '/login', state: {from: props.location}}}/>
        }

        return <Component {...props}/>
    }}/>
)

export default PlayerRoute
