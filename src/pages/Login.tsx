import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import TextField from '@mui/material/TextField';

import { useLoginMutation } from '../api/authAPI';

import { Button, linkStyle, LoginModal, RowItem, TextButton } from './StyledComponents';

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

  return (
    <div className="backimage">
      <LoginModal>
        <TextField
          type="email"
          value={username}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={e => setUsername(e.target.value.trim())}
        ></TextField>

        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value.trim())}
          required={true}
        />

        {error && <p>{error}</p>}
        <RowItem>
          <Button onClick={loginHandler}>Login</Button>
          <Button>
            <Link to="/register" style={linkStyle}>
              Register
            </Link>
          </Button>
        </RowItem>
        <TextButton>
          <Link to="/forgotPassword">Forgot Password ??</Link>
        </TextButton>
      </LoginModal>
      <button>
        <Link to="/shop" style={linkStyle}>
          Shop
        </Link>
      </button>
    </div>
  );
}

export default observer(Login);
