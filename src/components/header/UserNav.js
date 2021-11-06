import React from 'react'

function UserNav(props) {

    const { goToPage } = props

    return (
        <React.Fragment>
                    <Nav.Link className="nav-bar-link" 
                              onClick={() => goToPage('/')}>Home</Nav.Link>
                    <Nav.Link className="nav-bar-link"
                              onClick={() => goToPage('/participants')}>Participants</Nav.Link>
                    <Nav.Link className="nav-bar-link"
                              onClick={() => goToPage('/add-participant')}>Add Participant</Nav.Link>
                    <Nav.Link className="nav-bar-link"
                              onClick={() => goToPage('/contacts')}>Contacts</Nav.Link>
                    <Nav.Link className="nav-bar-link"
                              onClick={() => goToPage('/news-admin')}>News</Nav.Link>
                    <Nav.Link className="nav-bar-link"
                              onClick={() => goToPage('/results-admin')}>Results</Nav.Link>
        </React.Fragment>
    )
}

export default UserNav
