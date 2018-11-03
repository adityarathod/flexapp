import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Marketing from '../screens/Marketing/Marketing';
import Onboarding from '../screens/Onboarding/Onboarding';
import Home from '../screens/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Marketing} />
          <Route path="/onboarding" component={Onboarding} />
          <Route path="/home" component={Home} />
        </main>
      </Router>
    );
  }
}

export default App;
