import React, { useEffect, useState } from 'react';
import './styles/ForgotPassword.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setError } from '../redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useSendMailMutation } from '../api/mailAPI';
import TextField from '@mui/material/TextField';
import { Modal } from '../pages/StyledComponents';
import styled from 'styled-components';
import { ColoredButton } from './StyledComponents';

const ColumnView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(true);
  const [message, setMessage] = useState('');
  const error = useSelector((state: any) => state.user.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sendMail] = useSendMailMutation();
  const location = useLocation();
  const responseHandler = async () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      dispatch(setError('Invalid email format. Please enter a valid email address.'));
      return;
    }

    sendMail(email);

    setResponse(false);
    setMessage('If the e-mail exists, you will receive a message with your password ');
    dispatch(setError(''));
    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 2000);
  };

  useEffect(() => {
    if (location.pathname !== '/login') {
      dispatch(setError(''));
    }
  }, [location.pathname, dispatch]);

  return (
    <Modal>
      <ColumnView>
        <button className="forgottenToMain">
          <Link to="/login">Back &rarr;</Link>
        </button>
        <TextField
          type="email"
          value={email}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={e => setEmail(e.target.value)}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ColoredButton onClick={responseHandler}>Retrieve Password</ColoredButton>
      </ColumnView>
    </Modal>
  );
};
export default ForgotPassword;
