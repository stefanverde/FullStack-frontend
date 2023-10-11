import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../GlobalCSS/Global.css';
import './styles/RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    email: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    const containsNumber = /\d/.test(newPassword);
    const containsSpecialCharacter = /[!@#$%^&;<>.?~]/.test(newPassword);

    if (!containsNumber || !containsSpecialCharacter) {
      setPasswordError(
        'Password must contain at least one number and one special character.'
      );
    } else {
      setPasswordError('');
    }

    setFormData({ ...formData, password: newPassword });
  };

  const handleRepeatPasswordChange = (e: any) => {
    const newRepeatPassword = e.target.value;
    setFormData({ ...formData, repeatPassword: newRepeatPassword });
  };

  const submitForm = async (e: any) => {
    if (formData.password !== formData.repeatPassword) {
      setPasswordError("Passwords don't match. ");
      return;
    }
    const { repeatPassword, ...requestData } = formData;

    const result = await fetch('http://localhost:3001/v1/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    navigate('/login', { replace: true });
    const json = await result.json();
  };

  return (
    <div className='backimage'>
      <div className='registration-modal'>
        <input
          className='username'
          type='text'
          placeholder='First Name'
          name='firstName'
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          className='username'
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          className='username'
          type='text'
          placeholder='Email@email.com'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          className='password'
          type='password'
          placeholder='Password'
          value={formData.password}
          onChange={handlePasswordChange}
        />
        <input
          className='password'
          type='password'
          placeholder='Repeat Password'
          value={formData.repeatPassword}
          onChange={handleRepeatPasswordChange}
        />

        <button
          className='submit'
          onClick={async (event) => await submitForm(event)}>
          Submit Registration
        </button>

        <button className='toMain'>
          <Link
            to='/login'
            style={{ textDecoration: 'none', color: 'black' }}>
            Back to Login. &rarr;
          </Link>
        </button>

        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      </div>
    </div>
  );
}

export default RegistrationForm;
