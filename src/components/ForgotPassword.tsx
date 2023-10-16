import React, { useState } from 'react';
import '../pages/styles/Login.css';
import './styles/ForgotPassword.css';
import { Link, useNavigate } from 'react-router-dom';
import { setError } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import sendMailAPI from '../api/sendMailAPI';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(true);
  const [message, setMessage] = useState('');
  const error = useSelector((state: any) => state.user.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const responseHandler = async () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      dispatch(
        setError('Invalid email format. Please enter a valid email address.')
      );
      return;
    }

    sendMailAPI(email);

    setResponse(false);
    setMessage(
      'If the e-mail exists, you will receive a message with your password '
    );
    dispatch(setError(''));
    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 2000);
  };
  return (
    <div>
      <div className='backimage'>
        <div className='forgottenP-modal'>
          {response ? (
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
              {error && <div style={{ color: 'red' }}>{error}</div>}
              <button className='forgottenToMain'>
                <Link to='/login'>Back &rarr;</Link>
              </button>
            </div>
          ) : (
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
};
export default ForgotPassword;
