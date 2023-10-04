import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './componentsStyles/ResetPassword.css';
const ResetPassword = () => {
  //conditios have to be met
  //min 6 characters, min 1 special char & number( .length, .contains)

  //i'll create another function before to add the conditions
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const tryPassword = () => {};
  const changePassword = () => {
    console.log('need to implement');
  };
  return (
    <div className='backimage'>
      <div className='resetModal'>
        <input
          className='password'
          type='password'
          placeholder='New Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className='password'
          type='password'
          placeholder='Confirm New Password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          className='submitReset'
          onClick={tryPassword}>
          <Link
            to='/login'
            style={{
              textDecoration: 'none',
              color: 'black',
            }}>
            Submit
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
