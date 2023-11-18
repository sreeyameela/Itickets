import React from 'react';
import { Fragment } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import linkedinIcon from '../../assets/Iticketslogo.png';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.removeItem('mail','false');
        navigate('/');
    };

    const userEmail = localStorage.getItem('mail');
    const userRole = userEmail === 'ticket@gmail.com' ? 'User' : userEmail === 'admin@gmail.com' ? 'Admin' : '';

    const renderLogoutButton = userEmail ? (
        <DropdownButton
            variant="outline-secondary"
            id="dropdown-basic-button"
            title={userRole}
            className="ml-3"
        >
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
    ) : null;

    return (
        <Fragment>
            <header className='header-logo'>
                <img width="180" height="60" src={linkedinIcon} />
                <div className="d-flex">
                    {renderLogoutButton}
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
