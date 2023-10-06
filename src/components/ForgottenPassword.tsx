import React, { useState } from 'react';
import '../routes/routesStyles/Login.css';
import './componentsStyles/ForgottenPassword.css';
import { Link } from 'react-router-dom';

function ForgottenPassword() {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(true);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function responseHandler() {
    try {
      const response = await fetch('http://localhost:3001/v1/mail ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      if (response.ok) {
        setResponse(false);
        setMessage(
          'If the e-mail exists, you will receive a message with your password '
        );
      } else {
        setResponse(false);
        setErrorMessage('Email can not be empty');
      }
    } catch (error: any) {
      console.error('Network error:', error.message);
    }
  }
  return (
    <div>
      <div className='backimage'>
        <div className='forgottenP-modal'>
          {response && (
            <div className='content'>
              <input
                required
                className='username'
                type='text'
                placeholder='Email@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
              <button
                className='forgottenButton'
                onClick={responseHandler}>
                Retrieve Password
              </button>
              <button className='forgottenToMain'>
                <Link to='/login'>Back &rarr;</Link>
              </button>
            </div>
          )}
          {response ? undefined : ( //response by default true, when we click the button turn false to hide all information and show text
            <div
              style={{
                color: 'green',
                textAlign: 'center',
                marginTop: '20px',
              }}>
              {message} &#10003;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ForgottenPassword;
