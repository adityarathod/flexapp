import React from 'react';

import './FlexHero.scss';

const FlexHero = props => (
  <section className="hero flexhero is-medium">
    <div className="FlexHero-head">
      <nav className="navbar is-transparent is-mobile" style={{ backgroundColor: 'none' }}>
        <div className="container">
          <div className="navbar-brand">
            <p className="navbar-item">
              <img src="logoWhite-noshadow.svg" width="25%" alt="FLEX logo" />
            </p>
          </div>
        </div>
      </nav>
    </div>
    <div className="hero-body has-text-centered">
      <div className="container has-text-centered">
        <p className="flexhero-text has-text-white">{props.title}</p>
      </div>
    </div>
  </section>
)

export default FlexHero;
