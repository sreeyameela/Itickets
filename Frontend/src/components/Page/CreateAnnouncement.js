import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAnnouncement = () => {
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleTitleChange = (e) => {
    setAnnouncementTitle(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSchedule = () => {
    // Add your scheduling logic here
    console.log('Announcement scheduled from:', startDate, 'to:', endDate);
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log('Scheduling canceled');
  };

  return (
    <Container className="announcement-container   d-flex justify-content-center">
      <div className="announcement-form">
        <h2 className="text-center mb-4">Announcement Title Form</h2>
        <Form>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="announcementTitle">
                <Form.Label>Announcement Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter announcement title"
                  value={announcementTitle}
                  onChange={handleTitleChange}
                  className="small-input-box"
                />
              </Form.Group>
            </Col>
            </Row>
            <Row className="mb-5">
            <Col md={6}>
              <Form.Group controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Select date"
                  className="form-control"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="endDate">
                <Form.Label>End Date</Form.Label><br></br>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Select date"
                  className="form-control"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-5 justify-content-between">
            <Col>
              <Button variant="success" onClick={handleSchedule} block>
                Schedule
              </Button>
            </Col>
            <Col>
              <Button variant="danger" onClick={handleCancel} block>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default CreateAnnouncement;