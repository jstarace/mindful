import React from 'react';
import classes from './Toolbar.css';
// import Logo from '../../Logo/Logo';
import SideLogo from '../../Logo/LogoSideView';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <SideLogo />
    </div>
    <NavigationItems />
  </header>
);

export default toolbar;
