import { useState } from 'react';
import '../components/styles/LoginModal.css';
import '../components/styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const fetchRequest = async (input, init) => {
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
    if (username.trim() === '' || password.length <= 6) {
      setError('Input Username or Password is not valid. ');
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
      setIsLoggedIn(true);
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
          placeholder='Username'
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button
          className='credentialsLogin'
          onClick={loginHandler}
        >
          Login
        </button>
        <button className='register'>
          <Link
            to='/register'
            style={{ textDecoration: 'none', color: 'black' }}
          >
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
