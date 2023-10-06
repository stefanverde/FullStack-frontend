import { useNavigate } from 'react-router';
import './routesStyles/Home.css';
import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';

interface DecodedToken {
  email: string;
  firstName: string;
  lastName: string;
}


const Home: React.FC = () => {
  
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    try {
      const decodedToken = jwtDecode<DecodedToken>(authToken);

      const { email, firstName, lastName } = decodedToken;
      console.log(email, firstName, lastName);
    } catch (error) {
      console.log('error', error);
    }
  }

  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handlerModalToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='backimage'>
      <button
        className='items'
        onClick={handlerModalToggle}>
        Profile
      </button>
      {isClicked && (
        <div className='itemsModal'>
          <div className='block'> Id </div>
          <div className='block'> Name </div>
          <div className='block'> Family Name </div>
          <div className='block'> Email </div>
        </div>
      )}
      <button
        className='button dashboardLogout'
        onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
