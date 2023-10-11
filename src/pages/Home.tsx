import { useNavigate } from 'react-router';
import './styles/Home.css';
import React, { useEffect, useRef, useState } from 'react';
import { Blob } from 'buffer';
import ProfilePicture from '../components/ProfilePicture';
import fetchUserDetails from '../api/LoginAPI';
import { User } from '../api/LoginAPI';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [image, setImage] = useState<Blob | null>(null);

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
          <div className='block'>ID:&nbsp; {userDetails?.id}</div>
          <div className='block'>
            First Name:&nbsp; {userDetails?.firstName}
          </div>
          <div className='block'>Last Name:&nbsp; {userDetails?.lastName}</div>
          <div className='block'>Email:&nbsp; {userDetails?.email}</div>
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
