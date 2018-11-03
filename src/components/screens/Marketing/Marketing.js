import React from 'react';

import FlexHero from '../../FlexHero/FlexHero';
import InstallInstructions from '../../InstallIntructions';
import ImageGrid from '../../ui/ImageGrid';
import GraySection from '../../ui/GraySection';
import Footer from '../../Footer';

import screen1 from './screen1.png';
import screen2 from './screen2.png';
import screen3 from './screen3.png';


const Marketing = () => (
  <div>
    <FlexHero title="A brand new app for FLEX time." />
    <InstallInstructions />
    <ImageGrid images={[{ title: 'Browse offerings', data: screen1 }, { title: 'Create appointments', data: screen2 }, { title: 'Check in with a tap', data: screen3 }]} />
    <GraySection>
      <h1 className="title">Why use FLEX?</h1>
      <p>FLEX is a brand-new app that lets you do anything that the FlexTime website does. FLEX is free, and you don't have
			to wait for an app to install!</p>
    </GraySection>
    <Footer />
  </div>
)

export default Marketing;
