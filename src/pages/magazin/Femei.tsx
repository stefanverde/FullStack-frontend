import { observer } from 'mobx-react';
import React from 'react';
import NavigationBar from '../NavigationBar';
import { Outlet } from 'react-router-dom';

const Femei = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default observer(Femei);
