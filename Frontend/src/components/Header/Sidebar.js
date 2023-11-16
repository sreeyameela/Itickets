import React, { useState } from "react";
import "../Page/Styles.css";


const Sidebar = () => {
  const [isDepartmentsOpen, setDepartmentsOpen] = useState(false);

  const toggleDepartments = () => {
    setDepartmentsOpen(!isDepartmentsOpen);
  };

  return (
    <div className="sidebar sidebar-show" id="mySidebar" style={{ height: "100%", background:"#555!important" }}>
      <ul className="sidebar-nav">
        <li className="nav-title">Our Services</li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="nav-icon cil-speedometer"></i> Admin Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="nav-icon cil-speedometer"></i> Student Metrics
          </a>
        </li>
{/* departments dropdown in sidebar */}

        {/* <li className={`nav-item nav-group ${isDepartmentsOpen ? "open" : ""}`}>
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
        </li> */}


{/* ---------------- */}
        {/* <li className="nav-item mt-auto">
          <a className="nav-link nav-link-success" href="https://coreui.io">
            <i className="nav-icon cil-cloud-download"></i> Download CoreUI
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-danger" href="https://coreui.io/pro/">
            <i className="nav-icon cil-layers"></i> Try CoreUI
            <strong>PRO</strong>
          </a>
        </li> */}
      </ul>
      <button className="sidebar-toggler" type="button"></button>
    </div>
  );
};

export default Sidebar;