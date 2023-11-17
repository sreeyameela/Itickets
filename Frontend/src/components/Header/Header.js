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
import  { NavDropdown } from 'react-bootstrap';
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
        // <DropdownButton
        //     variant="outline-secondary"
        //     id="dropdown-basic-button"
        //     title="Admin"
        //     className="ml-3"
        // >
        //      <Dropdown.Item onClick={handleUpdateProfile}>Update Profile</Dropdown.Item>
        //     <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        // </DropdownButton>
        <NavDropdown
                  title={`Username`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
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
