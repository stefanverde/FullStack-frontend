import React, { useState } from 'react';
import './styles/ResetPassword.css';
import { useParams,useNavigate } from 'react-router-dom';
const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const resetPassword = async () => {
    const passSpecialChar = /[!@#$%^&;<>.?~]/.test(newPassword);

    if (!passSpecialChar || newPassword.length < 6) {
      setError('Passwords too short or do not contain a special character');
      return;
    }
    if (newPassword !== password) {
      setError("Passwords don't match");
      return;
    }
    setIsValid(true);
    const result = await fetch(
      `http://localhost:3001/v1/users/update-password/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: newPassword,
        }),
      }
    );

    setTimeout(() => {

      navigate('/login', { replace: true });
    }, 1000);
  };
  return (
    <div className='backimage'>
      <div className='resetModal'>
        {isValid ? (
          <div className='passwordConfirmed'>
            Password Changed Successfully &#10003;
          </div>
        ) : (
          <div>
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
              onClick={resetPassword}>
              Submit
            </button>
            {error && (
              <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
            )}
            
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;