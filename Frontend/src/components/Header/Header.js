import { Fragment } from 'react';

import './Header.css';
import linkedinIcon from '../../assets/Iticketslogo.png'

const Header = (props) => {
    return (
        <Fragment>
            <header className='header-logo'>
                <img width="200" height="80" src={linkedinIcon} />
                    <button type="submit" className="header-login-button">
                       Sign in 
                    </button>
            </header>
        </Fragment>
    );
};

export default Header;
