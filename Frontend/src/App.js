import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/Page/Styles.css'
import Header from './components/Header/Header';
import Admin from './components/Page/Admin';
import Sidebar from './components/Header/Sidebar';

import './App.css';

function App() {
  return (
    <Container fluid className="app-container">
      {/* Header */}
      <Row>
        <Col xs={12}>
          <Header />
        </Col>
      </Row>

      {/* Main Content */}
      <Row className="main-content-row">
        {/* Sidebar */}
        <Col xs={12} md={3} className="sidebar-col">
          <Sidebar />
        </Col>

        {/* Main Content Area */}
        <Col xs={12} md={9} className="main-content-col">
          <Admin />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
