import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { useHistory } from 'react-router';
import UserNav from './UserNav';
import NavBarAccount from './NavBarAccount'

function AppBar(props) {
    const { isLoggedIn, role } = props

    const history = useHistory();

    const goToPage = (page) => {

        history.push(page);
    }

    const displayLoginOrUserAccount = () => {

        if (isLoggedIn) {

            return (
                <NavBarAccount goToPage={goToPage}/>
            )
        }
        else {
            
            return (
                <Nav className="ml-auto">
                    <Nav.Link className="nav-bar-link-login" 
                              onClick={() => goToPage('/login')}>Login</Nav.Link>
                </Nav>
            )
        }
    }

    const goToIndexOrGoToHub = () => {

        if (isLoggedIn) {

            return <Navbar.Brand href='/user-hub' className="nav-bar-brand">User Test</Navbar.Brand>
        }

        return <Navbar.Brand href="/" className="nav-bar-brand">User Test</Navbar.Brand>
    }

    const displayRoleBasedNavLinks = () => {

        if (isLoggedIn) {

            if (role === 'USER') {

                return (
                    <UserNav goToPage={goToPage}/>
                )
            }
        }
        else {

            return (
                <React.Fragment>
                    <Nav.Link className="nav-bar-link" 
                              onClick={() => goToPage('/')}>Home</Nav.Link>                          
                </React.Fragment>
            )
        }
    }

    return (
        <Navbar className="nav-bar" variant="dark">
            {goToIndexOrGoToHub()}
            <Nav className="mr-auto">
                {displayRoleBasedNavLinks()}
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            {displayLoginOrUserAccount()}
        </Navbar>
    )
}

export default AppBar
