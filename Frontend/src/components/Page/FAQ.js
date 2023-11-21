import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Col,Row } from 'react-bootstrap';

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

// faq page 

const FAQ = ({ faq, index, toggleFAQ }) => {
    return (
      <div
        className={"faq " + (faq.open ? "open" : "")}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        <div className="faq-question">{faq.question}</div>
        <div className="faq-answer">{faq.answer}</div>
      </div>
    );
  };
  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false
    },
    {
      question:
        "How many questions does it take to makes a successful FAQ Page?",
      answer: "This many!",
      open: false
    },
    {
        question: "How many programmers does it take to screw a lightbulb?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
        open: true
      },
      {
        question: "Who is the most awesome person?",
        answer: "You! The viewer!",
        open: false
      },
      {
        question:
          "How many questions does it take to makes a successful FAQ Page?",
        answer: "This many!",
        open: false
      }
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };


  return (
    
    
    <div className='container' style={{marginTop:"80px"}}>
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Answer</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={handleChange} />
          </Form.Group>
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
      
    <Row>
      <Col xs={3}></Col>
      <Col xs={9} md={9} lg={9}>
        <div className="faq-list">
          <div className="faqs">
            {faqs.map((faq, index) => (
              <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </Col>
    </Row>
  </div>
    


  );
}

export default CreateFAQ;