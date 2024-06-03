import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LinkStyle } from '../components/LandingTopBar';

const NavigationBar = () => {
  const location = useLocation();
  const isMagazinBarbati = location.pathname.startsWith('/magazinBarbati');
  return (
    <nav
      style={{
        background: `unset`,
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {isMagazinBarbati ? (
        <>
          <Link to="/magazinBarbati/drumetieHiking" style={LinkStyle}>
            Drumetie/Hiking
          </Link>
          <Link to="/magazinBarbati/incaltaminte" style={LinkStyle}>
            Incaltaminte
          </Link>
          <Link to="/magazinBarbati/imbracaminte" style={LinkStyle}>
            Imbracaminte
          </Link>
          <Link to="/magazinBarbati/pescuit" style={LinkStyle}>
            Pescuit
          </Link>
        </>
      ) : (
        <>
          <Link to="/magazinFemei/drumetieHiking" style={LinkStyle}>
            Drumetie/Hiking
          </Link>
          <Link to="/magazinFemei/incaltaminte" style={LinkStyle}>
            Incaltaminte
          </Link>
          <Link to="/magazinFemei/imbracaminte" style={LinkStyle}>
            Imbracaminte
          </Link>
          <Link to="/magazinFemei/iarna" style={LinkStyle}>
            Snowboard
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
