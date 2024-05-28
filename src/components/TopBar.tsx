import { observer } from 'mobx-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextButton, ColoredButton } from '../components/StyledComponents';

const TopBar = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ height: '5vh', width: '100vw' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ColoredButton style={{ padding: '10px 20px' }} onClick={() => handleButtonClick('/login')}>
          Login
        </ColoredButton>
      </div>
    </div>
  );
};

export default observer(TopBar);
