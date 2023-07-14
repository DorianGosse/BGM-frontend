import React, { useState } from 'react';

import './LoginView.css';


const LoginView = ({ changeFormValue, clearForm, loginForm, signupForm }) => {
    const [loginError, setLoginError] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleSignupOnClick = () => {
        if (showSignup) {
            console.log('sign up button clicked from signup state');
        } else {
            console.log('signup button clicked from login state');
            setLoginError(false);
            setShowSignup(true);
            changeFormValue('signupForm', 'email', loginForm.email);
            clearForm('loginForm');
        }
    };

    const handleLoginOnClick = () => {
        if (showSignup) {
            console.log('login clicked from signup state');
            clearForm('signupForm');
            setShowSignup(false);
        } else {
            console.log('login clicked from login state');
        }
    };

    const handleEmailChange = (e) => {
        console.log('email change', e.target.value);
        const form = showSignup ? 'signupForm' : 'loginForm';
        changeFormValue(form, 'email', e.target.value);
    };

    const handlePasswordChange = (e) => {
        console.log('password change', e.target.value);
        const form = showSignup ? 'signupForm' : 'loginForm';
        changeFormValue(form, 'password', e.target.value);
    };

    return (
        <div className='login-page-container'>
            <h1>Dorians BGM App</h1>
            <div className='login-form-container'>
                <div className='input-field-container'>
                    <div class="input-container field">
                        <input
                            className="form-field"
                            type="text"
                            id='email'
                            value={showSignup ? signupForm.email : loginForm.email}
                            onChange={e => handleEmailChange(e)}    
                        />
                        <label for="email" className="form-label">Email</label>
                    </div>
                    <div className='input-container field'>
                        <input
                            className='form-field'
                            type='password'
                            id='password'
                            value={showSignup ? signupForm.password : loginForm.password}
                            onChange={e => handlePasswordChange(e)}
                        />
                        <label for='password' className='form-label'>Password</label>
                    </div>
                        {
                            showSignup
                            ?
                            <div className='confirm-password-input'>
                                <div className='input-container field'>
                                    <input
                                        id='confirm-password'
                                        className='form-field'
                                        value={signupForm.confirmPassword}
                                        type='password'
                                        onChange={e => changeFormValue('loginForm', 'confirmPassword', e.target.value)}
                                    />
                                    <label for='confirm-password' className='form-label'>Confirm</label>
                                </div>
                            </div>
                            :
                            null
                        }
                </div>
                <div className='login-button-row'>
                    <button className='login-buttons' onClick={() => handleLoginOnClick()}>{ showSignup ? 'Existing User' : 'Login' }</button>
                    <button className='login-buttons' onClick={() => handleSignupOnClick()}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default LoginView;