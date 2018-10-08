import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './OnboardingWelcome.scss';

class OnboardingWelcome extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="has-text-centered OnboardingWelcome-buttonContainer">
					<Link to="/onboarding/2">
						<button className="button is-link OnboardingWelcome-blueButton">
							Get Started
						</button>
					</Link>
				</div>
				<div className="hero is-fullheight">
					<div className="hero-body OnboardingWelcome-heroBody">
						<div className="has-text-centered" style={{ width: '100%' }}>
							<h1 className="subtitle OnboardingWelcome-subtitle">welcome to</h1>
							<img src="logo.svg" width="100" alt="FLEX logo" />
							<br />
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default OnboardingWelcome;