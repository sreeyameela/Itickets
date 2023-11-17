// import { Fragment } from 'react';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Header.css';
// import linkedinIcon from '../../assets/Iticketslogo.png'
// import { useNavigate } from 'react-router-dom';

// const Header = (props) => {
//     const navigate = useNavigate(); // Initialize useHistory

//     const handleLogout = () => {
//         // Perform logout logic here

//         // Remove isUserLoggedIn from local storage
//         localStorage.removeItem('isUserLoggedIn');

//         // Redirect to the login page
//         navigate('/');
//     };
//     return (
//         <Fragment>
//             <header className='header-logo'>
//                 <img width="180" height="60" src={linkedinIcon} />
//                 <div className="d-flex">
//                 <DropdownButton
//                     variant="outline-secondary"
//                     id="dropdown-basic-button"
//                     title="Admin"
//                     className="ml-3"
//                 >
//                     <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
//                 </DropdownButton>
//                 </div>
//             </header>
            
//         </Fragment>
//     );
// };

// export default Header;


import React from 'react';
import { Fragment } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import linkedinIcon from '../../assets/Iticketslogo.png';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate(); // Initialize useHistory

    const handleLogout = () => {
        // Perform logout logic here

        // Remove isUserLoggedIn from local storage
        localStorage.removeItem('isUserLoggedIn');

        // Redirect to the login page
        navigate('/');
    };

    // Check if the user is logged in
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

    // Conditionally render the DropdownButton based on login status
    const renderLogoutButton = isUserLoggedIn ? (
        <DropdownButton
            variant="outline-secondary"
            id="dropdown-basic-button"
            title="Admin"
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
