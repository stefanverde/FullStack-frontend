import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../GlobalCSS/Global.css';
import './styles/RegistrationForm.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateUser,
  setError,
  resetFormData,
} from '../redux/actions/userActions';
import addUserAPI from '../api/addUserAPI';

function RegistrationForm() {
  const formData = useSelector((state: any) => state.user.formData);
  const error = useSelector((state: any) => state.user.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    dispatch(updateUser({ ...formData, [name]: value }));
  };

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    const containsNumber = /\d/.test(newPassword);
    const containsSpecialCharacter = /[!@#$%^&;<>.?~]/.test(newPassword);

    if (!containsNumber || !containsSpecialCharacter) {
      dispatch(
        setError(
          'Password must contain at least one number and one special character.'
        )
      );
    } else {
      dispatch(setError(''));
    }

    dispatch(updateUser({ ...formData, password: newPassword }));
  };

  const handleRepeatPasswordChange = (e: any) => {
    const newRepeatPassword = e.target.value;
    dispatch(updateUser({ ...formData, repeatPassword: newRepeatPassword }));
  };

  const submitForm = async (e: any) => {
    if (formData.password !== formData.repeatPassword) {
      dispatch(setError("Passwords don't match. "));
      return;
    }
    if (
      formData.firstName === '' ||
      formData.lastName === '' ||
      formData.email === '' ||
      formData.password === '' ||
      formData.repeatPassword === ''
    ) {
      dispatch(setError('None of the fields should be empty'));
      return;
    }
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!isValidEmail) {
      dispatch(
        setError('Invalid email format. Please enter a valid email address.')
      );
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_CHECK_EXISTING_EMAIL}${formData.email}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const string = await response.text();
    const user = string ? JSON.parse(string) : null;

    if (user) {
      dispatch(setError('email already exists'));
      return;
    }
    
    dispatch(setError(''));

    addUserAPI(formData);

    dispatch(resetFormData());
    navigate('/login', { replace: true });
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
          onClick={(event) => submitForm(event)}>
          Submit Registration
        </button>

        <button className='toMain'>
          <Link
            to='/login'
            style={{ textDecoration: 'none', color: 'black' }}>
            Back to Login. &rarr;
          </Link>
        </button>

        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </div>
  );
}

export default RegistrationForm;
