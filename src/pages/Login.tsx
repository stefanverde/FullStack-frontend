import { useState } from 'react';
import './styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import fetchRequest from '../api/fetchRequestAPI';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginHandler = async () => {
    if (username.trim() === '' || password.trim() === '') {
      setError("Login fields can't be empty.");
      return;
    }

    try {
      const response = await fetchRequest(
        `${process.env.REACT_APP_LOGIN_TOKEN_ENDPOINT}`,
        {
          body: JSON.stringify({
            email: username,
            password,
          }),
          method: 'POST',
        }
      );
      console.log(response);
      localStorage.setItem('authToken', response.access_token);
      navigate('/', { replace: true });
    } catch (e) {
      setError('login details wrong');
    }
  };

  return (
    <div className='backimage'>
      <div className='modal'>
        <input
          className='email'
          type='text'
          placeholder='Email'
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
        />
        <input
          className='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        {error && <p>{error}</p>}
        <button
          className='credentialsLogin'
          onClick={loginHandler}>
          Login
        </button>
        <button className='register'>
          <Link
            to='/register'
            style={{ textDecoration: 'none', color: 'black' }}>
            Register
          </Link>
        </button>
        <button className='forgottenPassword'>
          <Link to='/forgotPassword'>Forgot Password ?</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
