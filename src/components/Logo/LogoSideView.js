import React from 'react';
import side_view_logo from '../../Assets/images/side_logo.png';
import classes from './LogoSideView.css';

const side_logo = (props) => (
  <div className={classes.SideLogo}>
    <img src={side_view_logo} alt="The journey is long" />
  </div>
);

export default side_logo;
