import React from 'react'
import { Nav } from 'react-bootstrap'

function UserNav(props) {

    const { goToPage } = props

    return (
        <React.Fragment>
                    <Nav.Link className="nav-bar-link" 
                              onClick={() => goToPage('/')}>Home</Nav.Link>
        </React.Fragment>
    )
}

export default UserNav
