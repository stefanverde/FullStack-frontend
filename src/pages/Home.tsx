import { useNavigate } from 'react-router';
import './styles/Home.css';
import React, { useState } from 'react';
import ProfilePicture from '../components/ProfilePicture';
import { useUserDetailsQuery } from '../api/userAPI';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const authToken = localStorage.getItem('authToken');
  const tokenPayload = authToken
    ? JSON.parse(atob(authToken.split('.')[1]))
    : null;
  const userId = tokenPayload ? tokenPayload.id : null;
  const { data: userDetails } = useUserDetailsQuery(userId);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login', { replace: true });
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
          <ProfilePicture />
          <div className='block'>ID: {userDetails?.id}</div>
          <div className='block'>First Name: {userDetails?.firstName}</div>
          <div className='block'>Last Name: {userDetails?.lastName}</div>
          <div className='block'>Email: {userDetails?.email}</div>
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
