import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';

import { updateUser, setError, resetFormData } from '../redux/features/userSlice';
import { useAddUserMutation, userApi } from '../api/userAPI';
import { RootState } from '../redux/store';

import '../assets/Global.css';
import { TextButton, ColoredButton } from './styles/StyledComponents';
import { Modal } from '../pages/StyledComponents';

function RegistrationForm() {
  const formData = useSelector((state: RootState) => state.user.formData);
  const error = useSelector((state: RootState) => state.user.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [trigger] = userApi.endpoints.checkExistingMail.useLazyQuery();
  const [addUser] = useAddUserMutation();
  const location = useLocation();
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    dispatch(updateUser({ ...formData, [name]: value }));
  };

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    const containsNumber = /\d/.test(newPassword);
    const containsSpecialCharacter = /[!@#$%^&;<>.?~]/.test(newPassword);

    if (!containsNumber || !containsSpecialCharacter) {
      dispatch(setError('Password must contain at least one number and one special character.'));
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
      dispatch(setError('Invalid email format. Please enter a valid email address.'));
      return;
    }

    if (emailExists) {
      dispatch(setError('email exists'));
      return;
    } else {
      dispatch(setError(''));
      const { repeatPassword, ...userData } = formData;
      addUser(userData);

      dispatch(resetFormData());
      navigate('/login', { replace: true });
    }
  };

  useEffect(() => {
    if (location.pathname !== '/login') {
      dispatch(setError(''));
      dispatch(resetFormData());
    }
  }, [location.pathname, dispatch]);

  return (
    <div className="backimage">
      <Modal>
        <TextField
          type="text"
          value={formData.firstName}
          label="First Name"
          name="firstName"
          variant="outlined"
          onChange={handleInputChange}
        ></TextField>
        <TextField
          type="text"
          value={formData.lastName}
          name="lastName"
          label="Last Name"
          variant="outlined"
          onChange={handleInputChange}
        ></TextField>
        <TextField
          type="email"
          value={formData.email}
          label="Email"
          name="email"
          variant="outlined"
          onChange={handleInputChange}
        ></TextField>
        <TextField type="password" label="Password" value={formData.password} onChange={handlePasswordChange} />
        <TextField
          type="password"
          label="Repeat Password"
          value={formData.repeatPassword}
          onChange={handleRepeatPasswordChange}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ColoredButton onClick={event => submitForm(event)}>Submit Registration</ColoredButton>
        <TextButton>
          <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
            Back to Login. &rarr;
          </Link>
        </TextButton>
      </Modal>
    </div>
  );
}

export default RegistrationForm;
