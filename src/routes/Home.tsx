import { useNavigate } from 'react-router';
import './routesStyles/Home.css';
import React from 'react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className='backimage'>
      <div className='dashboard'>
      <button>Login information</button>
      <button>Items</button>
      
      </div>
      <button className="dashboardLogout" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
