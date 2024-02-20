import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();

        // Check if the provided email and password match the expected values
        if (email === 'ticket@gmail.com' && password === 'ticket') {
            // Redirect to a new page (you can replace '/empty-page' with the actual path)
            alert('User Logged In');
            localStorage.setItem('isUserLoggedIn', 'yes');
            navigate('/userdashboard');
        } else if (email === 'admin@gmail.com' && password === 'admin') {
            // Redirect to a new page (you can replace '/empty-page' with the actual path)
            alert('Admin Logged In');
            localStorage.setItem('isUserLoggedIn', 'yes');
            navigate('/admindashboard');
        } else {
            // Handle incorrect email/password (e.g., show an error message)
            alert('Invalid email or password');
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Perform registration logic here

        // For now, just show an alert
        alert('User Registered');
    };

    return (
        <div className="container">
            <div className="row rowclass">
                <div className="col-md-6 order-md-1 order-2 sign-in" style={{ borderRight: '1px solid black' }}>
                    <h2 className="login-heading">Sign in to your account</h2>
                   <form onSubmit={handleSignIn}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <p className="forgot-pass">Forgot Password?</p>
                        <button type="submit" className="login-button">
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="col-md-6 order-md-2 order-1 sign-up">
                    <h2 className="login-heading">Register your account</h2>
                    <form onSubmit={handleSignUp}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="login-button">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
