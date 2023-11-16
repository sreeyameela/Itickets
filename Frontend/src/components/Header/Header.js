import { Fragment } from 'react';

import './Header.css';
import linkedinIcon from '../../assets/Iticketslogo.png'

const Header = () => {
    return (

        <body>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@4.3.0/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-2E9/b2fZ+VJoP6eRIpzzMFkuqbh0qDkIFVLzJJwkESsdKPEwzb0n6E55enZ+Ee8V" crossorigin="anonymous"></link>
            </head>
            <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@4.3.0/dist/js/coreui.bundle.min.js" integrity="sha384-Iqk8EE7ao72xAVBuuQTEwrU5N2IdvpJER5ZzM6LxwcXHqj2WstttaOvopXziv0nU" crossorigin="anonymous"></script>
            
            <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: '#2c3e50' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{color:"whitesmoke"}}>I-Tickets</a>
                    <button className="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Tickets</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">FAQ's</a>
                        </li>
                        {/* <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    </div>
                </div>
                </nav>
        
        </body>
       
    );
    }

    export default Header;