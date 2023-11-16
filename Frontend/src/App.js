import './App.css';
import Page from './components/Page/Page';
import Header from './components/Header/Header';
import Admin from './components/Page/Admin';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
   
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
