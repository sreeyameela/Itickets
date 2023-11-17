// import React from 'react';
// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Profile() {
  
// 	return (
// 		<div>
// 			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />

//         <div class="container">
//         <div class="row">
// 		<div class="col-12">
			
// 			<div class="my-5">
// 				<h3>My Profile</h3>
// 				<hr/>
// 			</div>
			
// 			<form class="file-upload">
// 				<div class="row mb-5 gx-6">
					
// 					<div class="col-xxl-8 mb-5 mb-xxl-0">
// 						<div class="bg-secondary-soft px-4 py-5 rounded">
// 							<div class="row g-3">
								
// 								<div class="col-md-6">
// 									<label class="form-label">First Name *</label>
// 									<input type="text" class="form-control" placeholder="" aria-label="First name" value="Scaralet"/>
// 								</div>
								
// 								<div class="col-md-6">
// 									<label class="form-label">Last Name *</label>
// 									<input type="text" class="form-control" placeholder="" aria-label="Last name" value="Doe"/>
// 								</div>
								
// 								<div class="col-md-6">
// 									<label class="form-label">Phone number *</label>
// 									<input type="text" class="form-control" placeholder="" aria-label="Phone number" value="(333) 000 555"/>
// 								</div>
								
// 								<div class="col-md-6">
// 									<label for="inputEmail4" class="form-label">Email *</label>
// 									<input type="email" class="form-control" id="inputEmail4" value="example@homerealty.com"/>
// 								</div>
// 							</div> 
// 						</div>
// 					</div>
					
// 					{/* <div class="col-xxl-4">
// 						<div class="bg-secondary-soft px-4 py-5 rounded">
// 							<div class="row g-3">
// 								<h4 class="mb-4 mt-0">Upload your profile photo</h4>
// 								<div class="text-center">
									
// 									<div class="square position-relative display-2 mb-3">
// 										<i class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
// 									</div>
									
// 									<input type="file" id="customFile" name="file" hidden=""/>
// 									<label class="btn btn-success-soft btn-block" for="customFile">Upload</label>
// 									<button type="button" class="btn btn-danger-soft">Remove</button>
									
// 									<p class="text-muted mt-3 mb-0"><span class="me-1">Note:</span>Minimum size 300px x 300px</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div> */}
// 				</div> 	
// 				<div class="gap-3 d-md-flex justify-content-md-center text-center">
// 					<button type="button" class="btn btn-danger btn-lg">Delete profile</button>
// 					<button type="button" class="btn btn-primary btn-lg">Update profile</button>
// 				</div>
// 			</form> 
// 		</div>
// 	</div>
// 	</div>
// 		</div>
// 	);
// }
// export default Profile;

import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons'; // Importing Bootstrap Icons

export default function Profile() {
  return (
    <section className='d-flex justify-content-center align-items-center vh-100'>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg="4">
            <h2 className="text-center mb-4">User Profile</h2>
            <Card className="mb-4 text-center">
              <Card.Body>
                <PersonCircle size={120} className="mb-3" />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formMobile">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter mobile number" />
                    </Form.Group>
                  </Row>
                  <div className="d-flex justify-content-end">
                    <Button variant="danger" className="me-2">
                      Cancel
                    </Button>
                    <Button variant="success" type="submit">
                      Update
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
