import './styles/LoginModal.css';
import './styles/RegistrationForm.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const containsNumber = /\d/.test(newPassword);
    const containsSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(
      newPassword
    );

    if (!containsNumber || !containsSpecialCharacter) {
      setPasswordError(
        'Password must contain at least one number and one special character.'
      );
    } else {
      setPasswordError(''); // Clears error if password valid
    }

    setPassword(newPassword);
  };

  const handleRepeatPasswordChange = (e) => {
    const newRepeatPassword = e.target.value;
    setRepeatPassword(newRepeatPassword);

    if (newRepeatPassword !== password) {
      setRepeatPasswordError('Passwords do not match.');
    } else {
      setRepeatPasswordError(''); // need to check this
    }
  };

  return (
    <div className='backimage'>
      <div className='registration-modal'>
        <input
          className='username'
          type='text'
          placeholder='First Name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='username'
          type='text'
          placeholder='Last Name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='username'
          type='text'
          placeholder='Email@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          className='password'
          type='password'
          placeholder='Repeat Password'
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
        />

        <button className='submit'>
          <Link
            to='/'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            Submit Registration
          </Link>
        </button>
        {passwordError && <div>{passwordError}</div>}
      </div>
    </div>
  );
}
export default RegistrationForm;
//change to form fields/ with the onsubmit button?
//only if submit registration successful -> link to main page "/"
