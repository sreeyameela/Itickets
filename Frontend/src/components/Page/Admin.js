import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import Sidebar from "../Header/Sidebar";

import '../Page/Styles.css';

const Admin = () => {
  return (
    <Container fluid>
      {/* Header Row */}
      <Row>
        <Col md={12}>
          <Header />
        </Col>
      </Row>

      {/* Main Content Row */}
      <Row>
        {/* Sidebar */}
        <Col md={3} className="sidebar-col">
          <Sidebar />
        </Col>
        
        {/* Main Content */}
        <Col md={9} className="main-content-col">
          <Row>
            <Col md={12}>
              <h1>Hello Admin</h1>
              <Link to="/">Logout</Link>
            </Col>

            {/* Cards */}
            <Col md={3} sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>This is the content of Card 1.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>This is the content of Card 2.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>This is the content of Card 3.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Card 4</Card.Title>
                  <Card.Text>This is the content of Card 4.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
