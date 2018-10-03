import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Login from '../Login/Login';
import IntroView from '../IntroView/IntroView';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={IntroView} />
          <Route path="/login" component={Login} />
        </main>
      </Router>
    );
  }
}

export default App;
