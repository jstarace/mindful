import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Logo from '../../components/Logo/Logo';
import WelcomeScreen from '../../components/WelcomeScreen/WelcomeScreen';
import Blogs from '../../components/Blog/Blog';

class About extends Component{
  render(){
    return(
      <Aux>
        {/*<WelcomeScreen />*/}
        <Blogs />
      </Aux>
    );
  }
}

export default About;
