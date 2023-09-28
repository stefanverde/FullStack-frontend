import '../components/styles/LoginModal.css';
import { Link } from 'react-router-dom';
function forgottenPassword() {
  return (
    <div>
      <div className='backimage'>
        there will be an email validation form .if email exists, password will
        be sent,else error
      </div>
      <button className='submit'>
        <Link to='/'>To mainpage</Link>
      </button>
    </div>
  );
}
export default forgottenPassword;
