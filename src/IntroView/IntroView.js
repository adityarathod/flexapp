import React, { Component } from 'react';


import IntroHero from '../IntroHero/IntroHero';
import IntroSidebar from '../IntroSidebar/IntroSidebar';
import IntroScreenshots from '../IntroScreenshots/IntroScreenshots';
import IntroInstallInstructions from '../IntroInstallInstructions/IntroInstallIntructions';
import AppFooter from '../AppFooter/AppFooter';

import screen1 from './screen1.png';
import screen2 from './screen2.png';
import screen3 from './screen3.png';

class IntroView extends Component {
  render() {
    return (
      <div>
          <IntroHero />
          <IntroSidebar title="Why use FLEX?" text="FLEX is a brand-new app that lets you do anything that the FlexTime website does. FLEX is free, and you don't have
			to wait for an app to install!" />
      <IntroScreenshots images={[{title: 'Browse offerings', data: screen1}, {title: 'Create appointments', data: screen2}, {title: 'Check in with a tap', data: screen3}]} />
      <IntroInstallInstructions />
      <AppFooter />
      </div>
    );
  }
}

export default IntroView;
