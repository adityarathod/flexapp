import React from 'react';
import { Link } from 'react-router-dom';


const InstallInstructions = () => (
    <section className="section has-background-light has-text-centered" style={{ fontFamily: "'Inter UI', sans-serif" }}>
        <h1 className="title">How to install FLEX</h1>
        <ul>
            <li>1. Open the app by clicking the button below.</li>
            <li>2. Click on <strong><img src="share.svg" height="5" alt="Share icon" /> and Add to Home Screen </strong> <br /> (or the <img src="threedots.svg" alt="Three dots" /> and <strong>Add to home screen</strong> on Chrome for Android) <br /> to install the app onto your home screen.<br />This takes
                only a second and
				gives you easier access to the app.</li>
        </ul>
        <br />
        <Link to="/onboarding" className="button is-medium is-link">Launch App &rarr;</Link>
    </section>
)
export default InstallInstructions;