import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SearchBar from './SearchBar';

export const LinkStyle = {
  display: 'flex',
  fontWeight: 500,
  fontSize: '20px',
  color: `greenyellow`,
  textDecoration: 'unset',
  alignSelf: 'center',
  padding: '20px',
  cursor: 'pointer',
  marginRight: '20px',
};

const LandingTopBar = () => {
  return (
    <nav
      style={{
        background: `white`,
        height: '75px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/*<img src={} alt="Logo" />*/}
      <SearchBar />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '20px',
          color: `green`,
        }}
      >
        {localStorage.getItem('authToken') ? (
          <Link to="/dashboard" style={LinkStyle}>
            <PersonIcon />
            Contul Meu
          </Link>
        ) : (
          <Link to="/login" style={LinkStyle}>
            <PersonIcon />
            Autentificare
          </Link>
        )}
        <Link to="/shoppingCart" style={LinkStyle}>
          <ShoppingBasketOutlinedIcon />
          Cos
        </Link>
      </div>
    </nav>
  );
};

export default observer(LandingTopBar);
