import { observer } from 'mobx-react';
import React from 'react';
import LandingTopBar from '../components/LandingTopBar';
import LandingPageChoices from '../components/LandingPageChoices';

const Home = () => {
  return (
    <>
      {/*<LandingTopBar />*/}
      <LandingPageChoices />
    </>
  );
};

export default observer(Home);
