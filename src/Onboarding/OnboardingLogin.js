import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './OnboardingLogin.scss';

class OnboardingLogin extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="hero is-fullheight">
					<div className="hero-body" style={{ justifyContent: 'center' }}>
						<div className="has-text-centered" style={{ width: '100%' }}>
							<h1 className="title OnboardingLogin-title">
								Login to FLEX
							</h1>
							<h2 className="subtitle OnboardingLogin-subtitle">Log in using your FlexTime account.</h2>
							<br />
							<br />
							<input type="text" className="input" placeholder="username" style={{ boxShadow: 'none', marginBottom: '14px' }} />
							<input type="password" className="input" placeholder="password" style={{ boxShadow: 'none' }} />
							<br /> <br />
							<br />
							<Link to="/home/onboard-loading" style={{ fontSize: '18px', fontFamily: 'Inter UI', fontWeight: '500' }}>
								Login
							</Link>
						</div>
					</div>
				</div>
			</React.Fragment >
		)
	}
}

export default OnboardingLogin;