import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CreateFAQ() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [image, setImage] = useState("");
  const handleShow = () => {
    console.log('handleShow called');
    setShow(true);
  };
const  handleChange = (e) => {
    setImage(e.target.files[0]);
};


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create FAQ
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Query</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Query</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Query"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Answer</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div>
            <input type="file" onChange={handleChange} style={{border:'5px'}} />

            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateFAQ;