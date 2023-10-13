import { setError } from '../redux/actions/userActions';

const checkExistingMail = async (formData: { email: any; },dispatch:any) => {
  
  const response = await fetch(
    `${process.env.REACT_APP_CHECK_EXISTING_EMAIL}${formData.email}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );

  const string = await response.text();
  const user = string ? JSON.parse(string) : null;

  if (user) {
    dispatch(setError('email already exists'));
    return;
  }
  
};

export default checkExistingMail;