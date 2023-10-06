import React from 'react';
import '../GlobalCSS/Global.css';
import './componentsStyles/RegistrationForm.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;
    const containsNumber = /\d/.test(newPassword);
    const containsSpecialCharacter = /[!@#$%^&;<>.?~]/.test(newPassword);

    if (!containsNumber || !containsSpecialCharacter) {
      setPasswordError(
        'Password must contain at least one number and one special character.'
      );
    } else {
      setPasswordError(''); // Clears error if password valid
    }

    setPassword(newPassword);
  };

  const handleRepeatPasswordChange = (e: { target: { value: any } }) => {
    const newRepeatPassword = e.target.value;
    setRepeatPassword(newRepeatPassword);

    if (newRepeatPassword !== password) {
      setRepeatPasswordError('Passwords do not match.');
    } else {
      setRepeatPasswordError(''); // need to check this
    }
  };

  const submitForm = async () => {
    const myData = {
      firstName,
      lastName,
      password,
      email,
    };

    console.log('myData', myData);

    const result = await fetch('http://localhost:3001/v1/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myData),
    });
    const json = await result.json();
    console.log(json);
  };
  return (
    <div className='backimage'>
      <div className='registration-modal'>
        <input
          className='username'
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className='username'
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className='username'
          type='text'
          placeholder='Email@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          className='password'
          type='password'
          placeholder='Repeat Password'
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
        />

        <button
          className='submit'
          onClick={submitForm}>
          <Link
            to='/login'
            style={{
              textDecoration: 'none',
              color: 'black',
            }}>
            Submit Registration
          </Link>
        </button>
        <button className='toMain'> 
          <Link
            to='/login'
            style={{
              textDecoration: 'none',
              color: 'black',
            }}>
            Back to Login. &rarr;
          </Link>
        </button>
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      </div>
    </div>
  );
}
export default RegistrationForm;
//if submit registration successful -> send message "successful registration", redirect in 3 seconds/or you can go back to main page to login
//if submit registration !successful -> error message.

//The "required" attribute only works on form submit and since your input has no form the browser does not know what to validate on submit.
