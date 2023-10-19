import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Global.css';
import './styles/RegistrationForm.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateUser,
  setError,
  resetFormData,
} from '../redux/features/userSlice';
import { useAddUserMutation, userApi } from '../api/userAPI';
import { RootState } from '../redux/store';

function RegistrationForm() {
  const formData = useSelector((state: RootState) => state.user.formData);
  const error = useSelector((state: RootState) => state.user.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [trigger] = userApi.endpoints.checkExistingMail.useLazyQuery();
  const [addUser] = useAddUserMutation();
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
    
    const resTrigger = await trigger(formData.email);
    console.log('>>>>>>>>>', resTrigger);
    const emailExists = !!resTrigger.data;
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

    if (emailExists) {
      dispatch(setError('email exists'));
      return;
    }
    else{
      dispatch(setError(''));
      const {repeatPassword,...userData} = formData;
      addUser(userData);

      dispatch(resetFormData());
      navigate('/login', { replace: true });
    }
    
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
          type='email'
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
