import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import classes from './Blog.css';
import Aux from '../../hoc/Aux/Aux';

class Blog extends Component{
  state = {
    posts: [],
    selectedPostId: null
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return{
            ...post,
            author: 'Sharon'
          }
        })
        this.setState({posts: updatedPosts});
        //console.log(response);
      });
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id})

  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}/>;
    });
    return(
      <Aux>
        <section className = {classes.TitleBox}>
          <h1>My Thoughts</h1>
        </section>
        <section className={classes.TheBlogContainer}>
          <div className={classes.BlogList}>
            {posts}
          </div>
          <FullPost id={this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost />
        </section>
      </Aux>
    )
  }
}


export default Blog;
