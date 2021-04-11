import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigation_items = () =>(
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>About</NavigationItem>
    <NavigationItem link="/">Blog</NavigationItem>
    <NavigationItem link="/">Resources</NavigationItem>
    <NavigationItem link="/">Contact</NavigationItem>
  </ul>
);


export default navigation_items;
