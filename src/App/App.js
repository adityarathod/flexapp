import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import IntroView from '../IntroView/IntroView';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={IntroView} />
          <Route path="/home" component={Home} />
        </main>
      </Router>
    );
  }
}

export default App;
