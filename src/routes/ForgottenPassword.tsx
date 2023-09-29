import React, { useState } from 'react';
import './routesStyles/Login.css';
import './routesStyles/ForgottenPassword.css';
import { Link } from 'react-router-dom';
function ForgottenPassword() {
  const [email, setEmail] = useState('');
  const [response,setResponse] = useState(true);
  const [message,setMessage] = useState("");

  function responseHandler() {
    setResponse(false);
    setMessage("If the e-mail exists, you will receive a message with your password ")
  }
  return (
    <div>
      <div className='backimage'>
        <div className= "forgottenP-modal">
          {response && <div className='content'>
          <input
            required
            className='username'
            type='text'
            placeholder='Email@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
          <button className='forgottenButton' onClick={responseHandler}>
        Retrieve Password
        </button>
        <button className='forgottenToMain'>
          <Link to = "/login" style={{
              textDecoration: 'none',
              color: 'black',
            }}>Back &rarr;</Link>
          </button>
        </div>}
        {response? undefined:<div style = {{color:"green", textAlign:"center", marginTop:"20px"}}>{message} &#10003;</div>} 
        
        </div>
      </div>
      </div>
  );
}
export default ForgottenPassword;
//here i have to implement sending password to valid mails
//onclick make all content disappear (render true/false )

//i use response && because i'll also implement valid? valid message[is the given mail exists, you will receive a message with your password]