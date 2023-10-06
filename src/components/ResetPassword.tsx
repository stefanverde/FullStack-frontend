import React, { useState } from 'react';
import './componentsStyles/ResetPassword.css';
const ResetPassword = () => {
  //conditios have to be met
  //min 6 characters, min 1 special char & number( .length, .contains)

  //i'll create another function before to add the conditions

  //Use node crypto module :   var crypto = require("crypto"); var id = crypto.randomBytes(20).toString('hex');

  //this is the result: "bb5dc8842ca31d4603d6aa11448d1654";use this to generate random "id"?   localhost:3000/randomid/resetPassword

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const changePassword = () => {
    const passSpecialChar = /[!@#$%^&;<>.?~]/.test(newPassword);

    if (!passSpecialChar || newPassword.length < 6) {
      console.log(
        "Passwords don't meet the requirements. Either too short or do not contain a special character"
      );
      return;
    }
    if (newPassword !== password) {
      console.log("Passwords don't match");
      return;
    }
    setIsValid(true);
  };
  return (
    <div className='backimage'>
      <div className='resetModal'>
        {isValid? <div className='passwordConfirmed'>Password Changed Successfully &#10003;</div>: <div>
        <input
          className='newPassword'
          type='password'
          placeholder='New Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className='newPassword'
          type='password'
          placeholder='Confirm New Password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          className='submitReset'
          onClick={changePassword}>
          Submit
        </button>
        </div>}
      </div>
    </div>
  );
};

export default ResetPassword;
