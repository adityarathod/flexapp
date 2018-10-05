import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OnboardingWelcome extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="has-text-centered" style={{ marginTop: 'calc(100vh - 200px)', position: 'fixed', zIndex: '1000000', width: '100%' }}>
					<Link to="/home/onboard-2">
						<button className="button is-link" style={{ width: '85%', height: '49px', background: '#007AFF', fontFamily: 'Inter UI', fontWeight: '400', borderRadius: '10px' }}>
							Get Started
					</button>
					</Link>
				</div>
				<div className="hero is-fullheight">
					<div className="hero-body" style={{ justifyContent: 'center' }}>
						<div className="has-text-centered" style={{ width: '100%' }}>
							<h1 className="subtitle" style={{ fontFamily: 'Inter UI', fontSize: '2rem', marginBottom: '10px' }}>welcome to</h1>
							<img src="logo.svg" width="100" />
							<br />
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
			</React.Fragment >
		)
	}
}

export default OnboardingWelcome;