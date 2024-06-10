import { observer } from 'mobx-react';
import React from 'react';
import Items from '../../components/Items';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { handleChangePath } from '../../assets/functions';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const buttonStyle = {
  background: 'unset',
  border: 'unset',
  cursor: 'pointer',
};
const DrumetieHiking = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
        <button onClick={() => handleChangePath('/cart', navigate)} style={buttonStyle}>
          <ShoppingCartIcon />
        </button>

        <button
          onClick={() => handleChangePath('/', navigate)}
          style={{
            background: 'unset',
            border: 'unset',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          <ArrowBackIcon /> <div> Spre prima pagina </div>
        </button>
      </div>
      <div
        style={{
          alignSelf: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          overflowY: 'scroll',
          height: '93vh',
        }}
      >
        <Items />
      </div>
    </div>
  );
};

export default observer(DrumetieHiking);
