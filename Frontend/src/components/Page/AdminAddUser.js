import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AdminAddUser = () => {
    const [showModal, setShowModal] = useState(false);
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        role: 'Professor', 
        mobileNumber: '',
    });
    const [userList, setUserList] = useState([]);
    const [selectedRole, setSelectedRole] = useState('All'); // Default to show all users

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            password: userDetails.password,
            email: userDetails.email,
            role: userDetails.role,
            mobileNumber: userDetails.mobileNumber,
        };
        setUserList([...userList, newUser]);
        setUserDetails({
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            role: 'Professor', 
            mobileNumber: '',
        });
        handleCloseModal(false);
    }

    return (
        <div className="container-fluid" style={{ marginTop: '70px' }}>
            <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <h2>Welcome ADMIN!</h2>
                    <br />
                    <Button variant="success" onClick={handleShowModal}>
                        ADD USER
                    </Button>
                    <br />
                    <br />
                    <div className="table-container">
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Mobile Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Mary</td>
                            <td>Jones</td>
                            <td>mary123</td>
                            <td>mary@gmail.com</td>
                            <td>Student</td>
                            <td>7890123456</td>
                        </tr>
                        {userList
                            .filter((user) => selectedRole === 'All' || user.role === selectedRole)
                            .map((user, index) => (
                                <tr key={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.password}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.mobileNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                    {/* Modal for Add User */}
                    <Modal show={showModal} onHide={handleCloseModal} >
                        <Modal.Header closeButton>
                            <Modal.Title>Add User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/* Form inside the modal */}
                            <Form>
                                {/* Add your form fields here */}
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" value={userDetails.firstName} onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })} required />
                                </Form.Group>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" value={userDetails.lastName} onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })} required  />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Password" value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} required />
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Email" value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} required/>
                                </Form.Group>
                                <Form.Group controlId="formRole">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Check
                                        type="radio"
                                        label="Professor"
                                        name="formRole"
                                        id="professorRole"
                                        onChange={() => setUserDetails({ ...userDetails, role: 'Professor' })}
                                        checked={userDetails.role === 'Professor'}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Student"
                                        name="formRole"
                                        id="studentRole"
                                        onChange={() => setUserDetails({ ...userDetails, role: 'Student' })}
                                        checked={userDetails.role === 'Student'}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formMobileNumber">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Mobile Number" value={userDetails.mobileNumber} onChange={(e) => setUserDetails({ ...userDetails, mobileNumber: e.target.value })} required/>
                                </Form.Group>
                                <br></br>
                                <div className="d-flex justify-content-between">
                                    <Button variant="danger" onClick={handleCloseModal}>
                                        Cancel
                                    </Button>
                                    <Button variant="success" onClick={handleSubmit}>
                                        Confirm Upload
                                    </Button>
                                </div>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </main>
            </div>
        </div>
    );
};

export default AdminAddUser;


