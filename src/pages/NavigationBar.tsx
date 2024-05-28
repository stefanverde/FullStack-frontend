import React from 'react';
import { Link } from 'react-router-dom';

export const LinkStyle = {
  display: 'flex',
  fontWeight: 500,
  fontSize: '20px',
  color: `green`,
  textDecoration: 'unset',
  alignSelf: 'center',
  padding: '20px',
  cursor: 'pointer',
  fontFamily: 'FixelText,sansSerif',
  marginRight: '20px',
};
const NavigationBar = () => {
  return (
    <nav
      style={{
        background: `unset`,
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link to="/makeup" style={LinkStyle}>
        Drumetie/Hiking
      </Link>
      <Link to="/skincare" style={LinkStyle}>
        Incaltaminte
      </Link>
      <Link to="/parfumuri" style={LinkStyle}>
        Imbracaminte
      </Link>
      <Link to="/baieCorp" style={LinkStyle}>
        Pescuit (pt barbati)
      </Link>
      <Link to="/par" style={LinkStyle}>
        Snowboard( pt femei)
      </Link>
    </nav>
  );
};

export default NavigationBar;
