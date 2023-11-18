import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideBar from '../Sidebar/Sidebar';
import Header from '../Header/Header';


const Admin = () => {
  return (
    <div className="container-fluid">
    <Row>
      {/* Header */}
      <Col xs={12}>
        <Header />
      </Col>

      {/* Sidebar */}
      <Col xs={12} md={3} className="order-md-last">
        <SideBar />
      </Col>

      {/* Main Content */}
      <Col xs={12} md={9} className="ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Share
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Export
              </button>
            </div>
          </div>
        </div>

        <h2>Section title</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
          <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Computer Science</td>
                <td></td>
                <td>1234567890</td>
                <td>
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  </div>
  );
};

export default Admin;
