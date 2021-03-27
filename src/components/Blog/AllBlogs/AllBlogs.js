import React from 'react';
import classes from './AllBlogs.css';
import CollapsedBlog from './CollapsedBlog/CollapsedBlog';

const all_blogs = (props) => (
  <div className={classes.BlogList}>
    <CollapsedBlog />
  </div>

);

export default all_blogs;
