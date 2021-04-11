import React from 'react';
import classes from './WelcomeImages.css';
// import test_img from '../../../Assets/images/logo.png';
import ocean from '../../../Assets/images/ocean.png';

const welcomeImages = (props) => (
  <div className={classes.image_container}>
    <div className={classes.left_image}>
      <img className={classes.side} src={ocean} alt="" />
    </div>
    <div className={classes.main_image}>
      <img className={classes.main} src={ocean} alt="" />
    </div>
    <div className={classes.right_image}>
      <img className={classes.side} src={ocean} alt="" />
    </div>
  </div>
);

export default welcomeImages
