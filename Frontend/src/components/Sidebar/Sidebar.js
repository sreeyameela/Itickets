import React, { useState, useEffect } from "react";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  const [isDepartmentsOpen, setDepartmentsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [Logged, setLogged]=useState('');

  useEffect(() => {
    // Fetch email from local storage
    const email = localStorage.getItem('mail');
    setUserEmail(email);
  }, []);

  const toggleDepartments = () => {
    setDepartmentsOpen(!isDepartmentsOpen);
  };

  return (
    <div className="sidebar sidebar-show" id="mySidebar" style={{ height: "100vh", background: "#555!important", boxShadow: "1px" }}>
      <ul className="sidebar-nav">
        <li className="nav-title">Our Services</li>
        
        {(userEmail === 'ticket@gmail.com') &&(
          <li className="nav-item">
            <a className="nav-link" href="/user">
              <i className="nav-icon cil-speedometer"></i> User Dashboard
            </a>
          </li>
        )}

        {(userEmail === 'admin@gmail.com') &&(
          <li className="nav-item">
            <a className="nav-link" href="/adminadduser">
              <i className="nav-icon cil-speedometer"></i> Admin Dashboard
            </a>
          </li>
        )}
      </ul>

      <button className="sidebar-toggler" type="button"></button>
    </div>
  );
};

export default Sidebar;
