import { useNavigate } from 'react-router';
import '../components/styles/Home.css';
const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className='backimage'>
      <div>there will be a dashboard here</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
