import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Page from './components/Page/Page';
import Header from './components/Header/Header';
import Admin from './components/Page/Admin';
import SideBar from './components/Sidebar/Sidebar';
import Profile from './components/Page/Profile';
import ViewTicket from './components/Page/ViewTicket';
import CreateAnnouncement from './components/Page/CreateAnnouncement.js';

function App() {

   const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

  return (
    <Router>
      <div className="App">
        <Header />
        {isUserLoggedIn === 'yes' ? <SideBar /> : null}
        <Routes>
          <Route path="/" element={<Page />} />  
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/viewticket" element={<ViewTicket />} />
          <Route path="/report" element={<CreateAnnouncement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;