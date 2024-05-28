import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import TextField from '@mui/material/TextField';

import { useLoginMutation } from '../api/authAPI';

import { Button, Modal, RowItem } from './StyledComponents';
import { TextButton, ColoredButton } from '../components/StyledComponents';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const loginHandler = async () => {
    if (username.trim() === '' || password.trim() === '') {
      setError("Login fields can't be empty.");
      return;
    }

    const response = await login({ email: username, password });
    if ('data' in response) {
      localStorage.setItem('authToken', response.data.access_token);
      navigate('/dashboard', { replace: true });
    }
    setError('Login details are incorrect');

    return;
  };

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="backimage">
      <Modal>
        <TextField
          type="email"
          value={username}
          label="Email"
          variant="outlined"
          onChange={e => setUsername(e.target.value.trim())}
        ></TextField>

        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value.trim())}
        />

        {error && <p style={{ color: 'red', display: 'flex', alignSelf: 'center' }}>{error}</p>}
        <RowItem>
          <Button onClick={loginHandler}>Login</Button>
          <Button onClick={() => handleButtonClick('/register')}>Register</Button>
        </RowItem>
        <TextButton style={{ alignSelf: 'center' }}>
          <Link to="/forgotPassword">Forgot Password ?</Link>
        </TextButton>
      </Modal>
      <ColoredButton style={{ padding: '10px 20px' }} onClick={() => handleButtonClick('/register')}>
        Shop
      </ColoredButton>
    </div>
  );
}

export default observer(Login);
