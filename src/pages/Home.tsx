import { useNavigate } from 'react-router';
import './styles/Home.css';
import React, { useEffect, useState } from 'react';
import ProfilePicture from '../components/ProfilePicture';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const fetchUserDetails = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        return;
      }
      const tokenPayload = JSON.parse(atob(authToken.split('.')[1]));
      console.log('tokenpayload ------>',tokenPayload);
      const userId = tokenPayload.id;
      
      console.log(userId);
      const response = await fetch(`${process.env.REACT_APP_USER_DATA_ENDPOINT}${userId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserDetails(data);
      } else {
        console.error('Error fetching user details');
      }
      
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
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
