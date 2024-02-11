import { observer } from 'mobx-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ColoredButton } from '../components/StyledComponents';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ height: '10vh', width: '100vw', color: 'red' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ColoredButton style={{ padding: '10px 20px' }} onClick={() => handleButtonClick('/shop')}>
          Shop
        </ColoredButton>
        <ColoredButton style={{ padding: '10px 20px' }} onClick={() => handleButtonClick('/login')}>
          Login
        </ColoredButton>
      </div>
    </div>
  );
};

export default observer(Home);
