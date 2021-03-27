import React from 'react';
import logo from '../../Assets/images/logo.png';
import classes from './Logo.css';

const the_logo = (props) => (
  <div className={classes.Logo}>
    <img src={logo} alt="The journey is long" />
  </div>
);

export default the_logo;
