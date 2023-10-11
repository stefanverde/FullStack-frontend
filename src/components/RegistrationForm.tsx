import React from 'react';
import '../GlobalCSS/Global.css';
import './styles/RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    email: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;
    const containsNumber = /\d/.test(newPassword);
    const containsSpecialCharacter = /[!@#$%^&;<>.?~]/.test(newPassword);

    if (!containsNumber || !containsSpecialCharacter) {
      setError(
        'Password must contain at least one number and one special character.'
      );
    } else {
      setError('');
    }

    setPassword(newPassword);
  };

  const handleRepeatPasswordChange = (e: { target: { value: any } }) => {
    const newRepeatPassword = e.target.value;
    setRepeatPassword(newRepeatPassword);

  const submitForm = async (e: any) => {
    if (formData.password !== formData.repeatPassword) {
      setError("Passwords don't match. ");
      return;
    }
    if (
      formData.firstName === '' ||
      formData.lastName === '' ||
      formData.email === '' ||
      formData.password === '' ||
      formData.repeatPassword === ''
    ) {
      setError('None of the fields should be empty');
      return;
    }
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!isValidEmail) {
      setError('Invalid email format. Please enter a valid email address.');
      return;
    }

    const { repeatPassword, ...requestData } = formData;
    // console.log('formData', requestData);

    const result = await fetch('http://localhost:3001/v1/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myData),
    });

    navigate('/login', { replace: true });
    const json = await result.json();
    //console.log(json);
  };

  return (
    <div className='backimage'>
      <div className='registration-modal'>
        <input
          className='username'
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className='username'
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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

        <button
          className='submit'
          onClick={submitForm}>
          <Link
            to='/login'
            style={{
              textDecoration: 'none',
              color: 'black',
            }}>
            Submit Registration
          </Link>
        </button>
        <button className='toMain'> 
          <Link
            to='/login'
            style={{
              textDecoration: 'none',
              color: 'black',
            }}>
            Back to Login. &rarr;
          </Link>
        </button>

        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </div>
  );
}
export default RegistrationForm;
//if submit registration successful -> send message "successful registration", redirect in 3 seconds/or you can go back to main page to login
//if submit registration !successful -> error message.

//The "required" attribute only works on form submit and since your input has no form the browser does not know what to validate on submit.
