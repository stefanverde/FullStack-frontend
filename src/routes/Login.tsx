import { useState } from 'react';
import './routesStyles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchRequest = async (
    input: RequestInfo | URL,
    init: RequestInit | undefined
  ) => {
    const response = await fetch(input, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      ...init,
    });

    if (!response.ok) {
      throw new Error('error');
    }
    const json = await response.json();
    return json;
  };

  const loginHandler = async () => {
    if (username.trim() === '' || password.trim() === '') {
      setError("Login fields can't be empty.");
      return;
    }
    if (!username || !password) {
      setError('Incorrect login details ');
      return;
    }
    setError('');
    try {
      const response = await fetchRequest(
        'http://localhost:3001/v1/auth/login',
        {
          body: JSON.stringify({
            email: username,
            password,
          }),
          method: 'POST',
        }
      );
      localStorage.setItem('authToken', response.access_token);
      navigate('/', { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='backimage'>
      <div className='modal'>
        <input
          className='username'
          type='text'
          placeholder='Email'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
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
          <Link to='/forgottenPassword'>Forgotten Password ?</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
