// import React, { useState } from "react";
// import "../Sidebar/Sidebar.css";

// const Sidebar = () => {
//   const [isDepartmentsOpen, setDepartmentsOpen] = useState(false);
//   const userEmail = localStorage.getItem('mail');

//   return (
//     <div className="sidebar" style={{ background: "#555!important", boxShadow: "1px" }}>
//       <button
//         className="sidebar-toggler"
//         type="button"
//         onClick={() => setDepartmentsOpen(!isDepartmentsOpen)}
//         aria-label="Toggle Departments"
//       ></button>

//       <ul className={`sidebar-nav ${isDepartmentsOpen ? "open" : ""}`}>
        
//         {userEmail === 'ticket@gmail.com' && (
//           <li className="nav-item">
//             <a className="nav-link" href="/user">
//               <i className="nav-icon cil-speedometer"></i> User Dashboard
//             </a>
//           </li>
//         )}

//         {userEmail === 'admin@gmail.com' && (
//           <li className="nav-item">
//             <a className="nav-link" href="/adminadduser">
//               <i className="nav-icon cil-speedometer"></i> Admin Dashboard
//             </a>
//             <a className="nav-link" href="/metrics">
//               <i className="nav-icon cil-speedometer"></i> Admin Metrics
//             </a>
//           </li>
//         )}

//         {/* Departments dropdown in sidebar */}
//         <li className={`nav-item nav-group ${isDepartmentsOpen ? "open" : ""}`}>
//           <a className="nav-link nav-group-toggle" onClick={() => setDepartmentsOpen(!isDepartmentsOpen)} href="javascript:void(0)">
//             <i className="nav-icon cil-puzzle"></i> Departments
//           </a>
//           {isDepartmentsOpen && (
//             <ul className="nav-group-items">
//               <li className="nav-item">
//                 <a className="nav-link" href="javascript:void(0)">
//                   <i className="nav-icon cil-puzzle"></i> Computer Science
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   <i className="nav-icon cil-puzzle"></i> Data Science
//                 </a>
//               </li>
//             </ul>
//           )}
//         </li>
        
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  const [isDepartmentsOpen, setDepartmentsOpen] = useState(false);

  const toggleDepartments = () => {
    setDepartmentsOpen(!isDepartmentsOpen);
  };

  return (
    <div className="sidebar m-0 p-0" style={{ background: "#555!important", boxShadow: "1px" }}>
      <button className="sidebar-toggler" type="button" onClick={toggleDepartments}></button>
      <ul className={`sidebar-nav ${isDepartmentsOpen ? "open" : ""}  p-0`}>
        <li className="nav-title">Our Services</li>
        <li className="nav-item">
        <a className="nav-link" href="/useradd">
            <i className="nav-icon cil-speedometer"></i> User Add 
          </a>
          <a className="nav-link" href="/adminMetrics">
            <i className="nav-icon cil-speedometer"></i> Admin Metrics
          </a>
          <a className="nav-link" href="/userdashboard">
            <i className="nav-icon cil-speedometer"></i> User Dashboard
          </a>
          <a className="nav-link" href="/faq">
            <i className="nav-icon cil-speedometer"></i> FAQ's
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