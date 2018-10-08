import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './OnboardingLogin.scss';

class OnboardingLogin extends Component {
	render() {
		return (
			<div className="hero is-fullheight">
				<div className="hero-body" style={{ justifyContent: 'center' }}>
					<div className="has-text-centered" style={{ width: '100%' }}>
						<h1 className="title OnboardingLogin-title">
							Login to FLEX
							</h1>
						<h2 className="subtitle OnboardingLogin-subtitle">Log in using your FlexTime account.</h2>
						<br />
						<br />
						<input type="text" className="input OnboardingLogin-input" placeholder="username" style={{ marginBottom: '14px' }} />
						<input type="password" className="input OnboardingLogin-input" placeholder="password" />
						<br /> <br />
						<br />
						<Link to="/onboarding/3" style={{ fontSize: '18px', fontFamily: 'Inter UI', fontWeight: '500' }}>
							Login
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default OnboardingLogin;