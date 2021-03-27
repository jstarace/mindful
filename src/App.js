import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import About from './containers/About/About';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <About />
        </Layout>
      </div>
    );
  }
}

export default App;
