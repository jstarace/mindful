import React from 'react';
import classes from './Post.css';
import Aux from '../../hoc/Aux/Aux'

const post = (props) => (
  <Aux>
    <article className={classes.BlogEntry} onClick={props.clicked}>
      <h2>{props.title}</h2>
      <p>Content</p>
      <p>{props.author}</p>
    </article>
  </Aux>
);

export default post;
