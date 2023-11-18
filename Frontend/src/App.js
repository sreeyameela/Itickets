import React from 'react';
import './App.css';
import Login from './components/Page/Login';
import Header from './components/Header/Header';
import Admin from './components/Page/Admin';
import Admin_metrics from './components/Page/Admin_metrics';
import SideBar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  const isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'yes';

  const handleLogout = () => {
    // Remove the item from local storage when logging out
    localStorage.removeItem('isUserLoggedIn');
  };

  return (
    <Router>
      <div className="App">
        <Header />
        {isUserLoggedIn && (
          <div>
            <Link to="/admin">Admin</Link>
            <button onClick={handleLogout}>Logout</button>
            <SideBar />
          </div>
        )}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/metrics" element={<Admin_metrics />} />
          {!isUserLoggedIn && <Route path="/login" element={<Navigate to="/" />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
