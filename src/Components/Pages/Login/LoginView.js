import React, { useState } from 'react';

import './LoginView.css';


const LoginView = () => {
    const [loginError, setLoginError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSignup, setShowSignup] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignupOnClick = () => {
        console.log('signup button clicked');
        setLoginError(false);
        setPassword('');
        setShowSignup(true);
    };

    const handleLoginOnClick = () => {
        console.log('login button clicked');
    }

    return (
        <div className='login-page-container'>
            <h1>Dorians BGM App</h1>
            <div className='login-form-container'>
                <div className='input-field-container'>
                        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter username' />
                        <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter password' />
                        <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder='Confirm password' />
                </div>
                <div className='login-button-row'>
                    <button onClick={() => handleLoginOnClick()}>Login</button>
                    <button onClick={() => handleSignupOnClick()}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default LoginView;