import React from 'react';
import ExpandedBlog from './ExpandedBlog/ExpandedBlog';
import AllBlogs from './AllBlogs/AllBlogs';
import Aux from '../../hoc/Aux/Aux';

import classes from './Blog.css';

const blogs = (props) => (
  <Aux>
    <div className = {classes.TitleBox}>
      <h1>My Thoughts</h1>
    </div>
    <div className={classes.TheBlogContainer}>
      <AllBlogs />
      <ExpandedBlog />
    </div>
  </Aux>
);

export default blogs;
