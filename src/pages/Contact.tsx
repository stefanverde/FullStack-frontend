import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import LandingPageChoices from '../components/LandingPageChoices';

const ContactUs = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 20px;
  background: white;
  align-self: center;
  margin-top: 4%;
  flex-direction: column;
  align-items: center;
`;
const Contact = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <LandingPageChoices />
      <ContactUs>
        <h3>Adresa: Strada Teodor Mihali 58-60, Cluj-Napoca</h3>
        <h3>Nr de telefon: +40 745 123 123</h3>
        <h3>Cod postal: 400591</h3>
      </ContactUs>
    </div>
  );
};
export default observer(Contact);
