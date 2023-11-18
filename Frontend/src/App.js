import './App.css';
import Login from './components/Page/Login';
import Header from './components/Header/Header';
import Admin from './components/Page/Admin';
import SideBar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminAddUser from './components/Page/AdminAddUser';
import User from './components/Page/User';

function App() {

   const mail = localStorage.getItem('mail');

  return (
    <Router>
      <div className="App">
        <Header />
        {(mail === 'ticket@gmail.com' ) || (mail === 'admin@gmail.com' ) ? <SideBar /> : null}
        <Routes>
          <Route path="/" element={<Login />} />  
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminadduser" element={<AdminAddUser/>}/>
          <Route path="/user" element={<User/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;