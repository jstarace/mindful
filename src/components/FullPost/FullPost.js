import React, { Component } from 'react';
import axios from 'axios';
import classes from './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null
  }
  componentDidUpdate(){
    if(this.props.id){
      if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
        axios.get('/posts/' + this.props.id)
          .then(response => {
            this.setState({loadedPost: response.data});
          });
      }
    }
  }
  render () {
    let post = <div className={classes.EntireBlog}>
                  <p style ={{textAlign: 'center'}}>Please Select a Post!</p>
                </div>
    if(this.props.id) {
      post = <div className={classes.EntireBlog}>
              <p style ={{textAlign: 'center'}}>Loading...</p>
            </div>
    }
    if (this.state.loadedPost){
      post = (
        <div className={classes.EntireBlog}>
          <h2>{this.state.loadedPost.title}</h2>
          <p>{this.state.loadedPost.body}</p>
          <p>Author</p>
        </div>
      );
    }
    return post;

  }


}

export default FullPost;
