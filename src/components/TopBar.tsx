import { observer } from 'mobx-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextButton, ColoredButton } from './styles/StyledComponents';
import { handleChangePath } from '../assets/functions';

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: '5vh', width: '100vw' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ColoredButton style={{ padding: '10px 20px' }} onClick={() => handleChangePath('/login', navigate)}>
          Login
        </ColoredButton>
      </div>
    </div>
  );
};

export default observer(TopBar);
