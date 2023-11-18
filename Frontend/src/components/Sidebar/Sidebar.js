import React, { useState } from "react";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  const [isDepartmentsOpen, setDepartmentsOpen] = useState(false);

  const toggleDepartments = () => {
    setDepartmentsOpen(!isDepartmentsOpen);
  };

  return (
    <div className="sidebar" style={{ background: "#555!important", boxShadow: "1px" }}>
      <button className="sidebar-toggler" type="button" onClick={toggleDepartments}></button>
      <ul className={`sidebar-nav ${isDepartmentsOpen ? "open" : ""}`}>
        <li className="nav-title">Our Services</li>
        <li className="nav-item">
          <a className="nav-link" href="/metrics">
            <i className="nav-icon cil-speedometer"></i> Admin Metrics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="nav-icon cil-speedometer"></i> Student Metrics
          </a>
        </li>

        {/* Departments dropdown in sidebar */}
        <li className={`nav-item nav-group ${isDepartmentsOpen ? "open" : ""}`}>
          <a className="nav-link nav-group-toggle" onClick={toggleDepartments} href="#">
            <i className="nav-icon cil-puzzle"></i> Departments
          </a>
          {isDepartmentsOpen && (
            <ul className="nav-group-items">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="nav-icon cil-puzzle"></i> Computer Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="nav-icon cil-puzzle"></i> Data Science
                </a>
              </li>
            </ul>
          )}
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
