import React from 'react';
import classes from './WelcomeScreen.css';
import Qod from './QuoteOfDay/QuoteOfDay';
import WelcomeImages from './WelcomeImages/WelcomeImages';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';

const welcome_screen = (props) => (
  <div>
    <Qod />
    <WelcomeImages />
    <WelcomeMessage />
  </div>
);

export default welcome_screen;
