import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Login from '../Login/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Login />
      </Router>
    );
  }
}

export default App;
