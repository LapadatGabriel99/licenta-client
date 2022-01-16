import React from 'react'
import { Nav } from 'react-bootstrap'
import '../../styles/AppBar.css'

function PlayerNav(props) {
    const { goToPage } = props

    return (
        <React.Fragment>
                    <Nav.Link className="nav-bar-link" 
                              onClick={() => goToPage('/')}>Home</Nav.Link>
                    <Nav.Link className="nav-bar-link"
                              onClick={() => goToPage('/player/test-board')}>Tests</Nav.Link>
                    <Nav.Link className="nav-bar-link"
                              onClick={() => goToPage('/player/score-test-board')}>Scored Tests</Nav.Link>
        </React.Fragment>
    )
}

export default PlayerNav
