import React from 'react'
import { Nav } from 'react-bootstrap'
import '../../styles/AppBar.css'

function UserNav(props) {

    const { goToPage } = props

    return (
        <React.Fragment>
                    <Nav.Link className="nav-bar-link" 
                              onClick={() => goToPage('/')}>Home</Nav.Link>
                    <Nav.Link className="nav-bar-link"
                              onClick={() => goToPage('/test-board')}>Tests</Nav.Link>
                    <Nav.Link className="nav-bar-link"
                              onClick={() => goToPage('/category-board')}>Categories</Nav.Link>
        </React.Fragment>
    )
}

export default UserNav
