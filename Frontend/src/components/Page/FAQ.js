import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

function CreateFAQ() {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

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

  useEffect(() => {
    const fetchFAQs = async () => {
      // Replace with your actual logic for fetching FAQs
      // For example: const response = await fetch('your_api_endpoint');
      // const data = await response.json();
      // return data;
      return [
        {
            topic: "Request for I20, Travel I20",
            question: "How to travel get I20?",
            answer: (
              <>
              <p>
                Click <a href="https://accessisss.albany.edu/istart/controllers/start/StartEngine.cfm">here</a> to navigate to the AccessISSS online system. If you are logging in from off campus you must be logged in through the University's VPN. Login with your UAlbany NetID (ex: AA123456) and password.
                </p >
                <p>
                Select the Request for Updated or Travel Signature I-20/DS-2019 from the EForm menu.
                </p >
                <p>
                upload supporting documents. If you need help, please review the File Upload Instructions webpage.
                </p>
                All updates will be communicated over email. Please allow up to 5-7 business days for processing.
              </>
            ),
            open: true,
          },
        {
          topic: "Reduced Course Load Authorization (RCL)",
          question: "How to apply RCL?",
          answer:(
            <>
              <p>
                Full-time enrollment at the University at Albany is 12 credits for
                undergraduate students and 9 credits for graduate students...
                (rest of the existing document)
              </p>
              <p>
                After reviewing the above information, you may submit a Reduced Course
                Load (RCL) Request EForm:
              </p>
              <ol>
                <li>
                  <a href="https://accessisss.albany.edu/istart/controllers/start/StartEngine.cfm">
                    Click here
                  </a>{" "}
                  
                </li>
               
              </ol>
              <p>
                All updates related to your EForm will be communicated over email.
                Please allow up to 5-7 business days for processing.
              </p>
            </>
          ),
          open: false,
        },
        {
          topic: "JavaScript",
          question: "What is JavaScript?",
          answer: "JavaScript is a programming language...",
          open: false,
        },
      ];
    };

    const fetchData = async () => {
      const fetchedFAQs = await fetchFAQs();
      setFaqs(fetchedFAQs);
    };

    fetchData();
  }, []);

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
    <div className="faq-container">
       
       
       {/*  */}
       
      <div className='row'>
        
        <div className="col" xs={12} order-md-2 order-1 md={8} lg={9}>
          {/* FAQ Section */}
          <div className="faq-list">
            <div className="faqs">
              {faqs.map((faq, index) => (
                (selectedTopic === null || faq.topic === selectedTopic) && (
                  <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                )
              ))}
            </div>
          </div>
        </div >

       
        <div className="col" xs={12} order-md-1 order-xs-1 md={4} lg={3} style={{ marginTop: "80px" }}>
          {/* Topics Section */}
          <div className='create_faq'>
          <div className='row'> 

        
                
                <div className='col' xs={12} order-md-1 order-xs-1 md={4} lg={3} >
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
                </div>

            </div>

          </div>
          <div className="topics">
            <h2>Topics</h2>
            <ul>
              {[...new Set(faqs.map((faq) => faq.topic))].map((topic, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedTopic(topic)}
                  style={{ cursor: "pointer" }}
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div >
      </div >
    </div>
  );
}

export default CreateFAQ;