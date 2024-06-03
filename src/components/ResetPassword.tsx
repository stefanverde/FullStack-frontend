import React, { useState } from 'react';
import './styles/ResetPassword.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../redux/features/userSlice';
import { useResetPasswordMutation } from '../api/userAPI';
import TextField from '@mui/material/TextField';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const error = useSelector((state: any) => state.user.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [resetPass] = useResetPasswordMutation();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const resetPassword = async () => {
    const passSpecialChar = /[!@#$%^&;<>.?~]/.test(newPassword);

    if (!passSpecialChar || newPassword.length < 6) {
      dispatch(setError('Passwords too short or do not contain a special character'));
      return;
    }
    if (newPassword !== password) {
      dispatch(setError("Passwords don't match"));
      return;
    }
    setIsValid(true);

    try {
      await resetPass({ token, newPassword });

      setTimeout(() => {
        dispatch(setError(''));
        navigate('/login', { replace: true });
      }, 1000);
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };
  return (
    <div className="backimage">
      <div className="resetModal">
        {isValid ? (
          <div className="passwordConfirmed">Password Changed Successfully &#10003;</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              type="password"
              label="Noua Parola"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              type="password"
              label="Confirma Noua Parola"
              value={newPassword}
              onChange={e => setPassword(e.target.value)}
            />
            <button className="submitReset" onClick={resetPassword}>
              Submit
            </button>
            {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
