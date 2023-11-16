import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";

import './Page.css';

const Page = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();

        // Check if the provided email and password match the expected values
        if (email === 'ticket@gmail.com' && password === 'ticket') {
            // Redirect to a new page (you can replace '/empty-page' with the actual path)
            alert('User Logged In');
            navigate('/Admin');
        } else {
            // Handle incorrect email/password (e.g., show an error message)
            alert('Invalid email or password');
        }
    };
    return (
        <div className='container'>
            <div className="row rowclass">
                <div className="col-6" style={{ borderRight: '1px solid black' }}>
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
                <div className="col-6">
                   <h2 className="login-heading">Register your account</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <input
                                type="name"
                                id="name"
                                placeholder="Name"
                                required
                            />
                        </div>
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
                            <label htmlFor="confpassword">Confirm Password</label>
                            <input
                                type="confpassword"
                                id="confpassword"
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Page;