import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Card, Table} from 'react-bootstrap';

const CreateTicketForm = () => {
  return (
    <Row className="justify-content-center" style={{ marginTop: '20px' }}>
      <Col md={8}>
        <Card style={{ border: '1px solid #ddd', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Card.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group controlId="formGridTitle" style={{ display: 'flex', flexDirection: 'column' }}>
                  <Form.Label style={{ alignSelf: 'flex-start' }}>Title</Form.Label>
                  <Form.Control placeholder="Enter title" />
                </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="formGridDescription" style={{ display: 'flex', flexDirection: 'column' }}>
                    <Form.Label style={{ alignSelf: 'flex-start' }}>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" />
                    </Form.Group>
                </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCategory" style={{ display: 'flex', flexDirection: 'column' }}>
                  <Form.Label style={{ alignSelf: 'flex-start' }}>Category</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Technical Issues</option>
                    <option>Support</option>
                    <option>Others</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPriority" style={{ display: 'flex', flexDirection: 'column' }}>
                  <Form.Label style={{ alignSelf: 'flex-start' }}>Priority</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAssignee" style={{ display: 'flex', flexDirection: 'column' }}>
                  <Form.Label style={{ alignSelf: 'flex-start' }}>Assignee</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Admin 1</option>
                    <option>Admin 2</option>
                    <option>Admin 3</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAttachment" style={{ display: 'flex', flexDirection: 'column' }}>
                  <Form.Label style={{ alignSelf: 'flex-start' }}>Attachment</Form.Label>
                  <Form.Control type="file" id="formFile" />
                </Form.Group>
              </Row>

              <div className="d-flex justify-content-between">
                <Button variant="danger">Cancel</Button>
                <Button variant="success">Upload</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

const OpenedTicketsTable = () => {
    // Mock data for demonstration purposes
    const openedTickets = [
      {
        title: 'Issue 1',
        description: 'Description for Issue 1',
        category: 'Software',
        priority: 'High',
        assignee: 'John Doe',
        attachedFile: 'file.txt',
      },
      {
        title: 'Issue 2',
        description: 'Description for Issue 2',
        category: 'Hardware',
        priority: 'Medium',
        assignee: 'Jane Smith',
        attachedFile: 'document.pdf',
      },
      // Add more ticket data as needed
    ];
  
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Assignee</th>
            <th>Attached File</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {openedTickets.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.title}</td>
              <td>{ticket.description}</td>
              <td>{ticket.category}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.assignee}</td>
              <td>{ticket.attachedFile}</td>
              <td style={{ color: 'green', fontWeight: 'bold' }}>
                {/* Replace with an appropriate tick symbol */}
                OPENED
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

const ClosedTicketsTable = () => {
  // Logic to fetch and display closed tickets goes here
  const openedTickets = [
    {
        title: 'Issue 1',
        description: 'Description for Issue 3',
        category: 'Network',
        priority: 'Low',
        assignee: 'Bob Johnson',
        attachedFile: 'image.jpg',
        status: 'OPENED',
      },
      {
        title: 'Issue 2',
        description: 'Description for Issue 4',
        category: 'Software',
        priority: 'High',
        assignee: 'Alice Brown',
        attachedFile: 'spreadsheet.xlsx',
        status: 'OPENED',
      },
    // Add more ticket data as needed
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Category</th>
          <th>Priority</th>
          <th>Assignee</th>
          <th>Attached File</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {openedTickets.map((ticket, index) => (
          <tr key={index}>
            <td>{ticket.title}</td>
            <td>{ticket.description}</td>
            <td>{ticket.category}</td>
            <td>{ticket.priority}</td>
            <td>{ticket.assignee}</td>
            <td>{ticket.attachedFile}</td>
            <td style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Replace with an appropriate tick symbol */}
              CLOSED
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const User = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    // Additional logic to run when the component mounts
    // You can fetch data, perform side effects, etc.
    // For now, let's just console.log a message.
    console.log('Component has mounted!');
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            </div>
            <br />
            <br />
            <h2>Welcome User!</h2>
            <div className="options-container" style={{ display: 'flex', border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}>
              <div onClick={() => handleOptionClick(1)} className={`option ${selectedOption === 1 ? 'selected' : ''}`} style={{ flex: 1, cursor: 'pointer', textAlign: 'center', padding: '20px' }}>
                Create Ticket
              </div>
              <div onClick={() => handleOptionClick(2)} className={`option ${selectedOption === 2 ? 'selected' : ''}`} style={{ flex: 1, cursor: 'pointer', textAlign: 'center', padding: '20px' }}>
                Opened Tickets
              </div>
              <div onClick={() => handleOptionClick(3)} className={`option ${selectedOption === 3 ? 'selected' : ''}`} style={{ flex: 1, cursor: 'pointer', textAlign: 'center', padding: '20px' }}>
                Closed Tickets
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              {selectedOption === 1 && <CreateTicketForm />}
              {selectedOption === 2 && <OpenedTicketsTable />}
              {selectedOption === 3 && <ClosedTicketsTable />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default User;
