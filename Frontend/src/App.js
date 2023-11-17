import './App.css';
import Page from './components/Page/Page';
import Header from './components/Header/Header';
import Admin from './components/Page/Admin';
import SideBar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        </Routes>
    </div> 
    </Router>
    
  );
}

export default App;