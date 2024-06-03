import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
// import { LinkStyle } from "../NavBar";
import React from 'react';
import { LinkStyle } from './LandingTopBar';
import PersonIcon from '@mui/icons-material/Person';
import SearchBar from './SearchBar';

const LandingPageChoices = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <Link to="/makeup" style={LinkStyle}>
        Femei
      </Link>
      <Link to="/skincare" style={LinkStyle}>
        Barbati
      </Link>

      <SearchBar />
      <Link to="/baieCorp" style={LinkStyle}>
        Contacteaza-ne
      </Link>
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
    </nav>
  );
};
export default observer(LandingPageChoices);
