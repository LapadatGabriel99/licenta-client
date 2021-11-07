import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../../actions/authentication/authenticationActions';

function NavBarAccount(props) {
    const { goToPage } = props

    const history = useHistory();

    const dispatch = useDispatch();

    const logoutBntClick = () => {

        const signOut = async () => {

            await dispatch(logout(history))
        }

        signOut()
    }

    return (
        <Nav className="ml-auto">
            <NavDropdown title="Account" id="basic-nav-dropdown" className="nav-bar-account">
                <NavDropdown.Item onClick={() => goToPage('/user-profile')}>
                    Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutBntClick}>Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default NavBarAccount
