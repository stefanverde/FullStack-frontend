import { observer } from 'mobx-react';
import React from 'react';
import NavigationBar from '../NavigationBar';

const Barbati = () => {
  return (
    <div>
      <NavigationBar />
    </div>
  );
};

export default observer(Barbati);
