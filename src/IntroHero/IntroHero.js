import React, { Component } from 'react';

import './IntroHero.scss';

class IntroHero extends Component {
  render() {
    return (
      <section className="hero introhero is-medium">
        <div className="introhero-head">
          <nav className="navbar is-transparent is-mobile" style={{ backgroundColor: 'none' }}>
            <div className="container">
              <div className="navbar-brand">
                <p className="navbar-item">
                  <img src="logoWhite.svg" width="25%" alt="FLEX logo" />
                </p>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body has-text-centered">
          <div className="container has-text-centered">
            <p className="introhero-text has-text-white">A brand new app for FLEX time.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default IntroHero;
