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
    }

    const handleEmailChange = (e) => {
        console.log('email change', e.target.value);
        const form = showSignup ? 'signupForm' : 'loginForm';
        changeFormValue(form, 'email', e.target.value);
    }

    const handlePasswordChange = (e) => {
        console.log('password change', e.target.value);
        const form = showSignup ? 'signupForm' : 'loginForm';
        changeFormValue(form, 'password', e.target.value);
    }

    console.log('loginForm', loginForm);

    return (
        <div className='login-page-container'>
            <h1>Dorians BGM App</h1>
            <div className='login-form-container'>
                <div className='input-field-container'>
                        <input
                            value={showSignup ? signupForm.email : loginForm.email}
                            type='text'
                            onChange={e => handleEmailChange(e)}
                            placeholder='Enter email'
                        />
                        <input
                            value={showSignup ? signupForm.password : loginForm.password}
                            type='password'
                            onChange={e => handlePasswordChange(e)}
                            placeholder='Enter password'
                        />
                        {
                        showSignup
                            ?
                            <input
                                value={signupForm.confirmPassword}
                                type='password'
                                onChange={e => changeFormValue('loginForm', 'confirmPassword', e.target.value)}
                                placeholder='Confirm password'
                            />
                            :
                            null
                        }
                </div>
                <div className='login-button-row'>
                    <button onClick={() => handleLoginOnClick()}>{ showSignup ? 'Existing User' : 'Login' }</button>
                    <button onClick={() => handleSignupOnClick()}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default LoginView;