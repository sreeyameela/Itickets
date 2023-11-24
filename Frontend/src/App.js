import React from 'react';
import './App.css';
import Login from './components/Page/Login';
import Header from './components/Header/Header';
import Admin from './components/Page/Admin';
import Admin_metrics from './components/Page/Admin_metrics';
import SideBar from './components/Sidebar/Sidebar';
import User from './components/Page/User';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import AdminAddUser from './components/Page/AdminAddUser';
import FAQ from './components/Page/FAQ';

function App() {
  const isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'yes';

  const handleLogout = () => {
    // Remove the item from local storage when logging out
    localStorage.removeItem('isUserLoggedIn');
  };

  return (
    <Router>
      <div className="App">
      
      
      {/* {isUserLoggedIn && (
          <div>
            <Link to="/admin">Admin</Link>
            <button onClick={handleLogout}>Logout</button>
            <SideBar />
          </div>
        )} */}
        <div className="container">
          <div >
          <Header />
          </div>
          <div className="row flex">
            <div className="col-2">
            <SideBar/>
            </div>
            <div className='col-10'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/adminMetrics" element={<Admin_metrics />} />
              <Route path="/userdashboard" element={<User />} />
              <Route path="/useradd" element={<AdminAddUser />} />
              <Route path="/faq" element={<FAQ />} />
              {!isUserLoggedIn && <Route path="/login" element={<Navigate to="/login" />} />}
            </Routes>
            </div>

        

          </div>
          
        </div>
        
      </div>
      
    </Router>
  );
}

export default App;




// <Header />
        
        