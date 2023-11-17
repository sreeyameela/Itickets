import './App.css';
import Page from './components/Page/Page';
import Header from './components/Header/Header';
import Admin from './components/Page/Admin';
// import SideBar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
   
    <Router>
     
       
        
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
     
    </Router>
  );
}

export default App;