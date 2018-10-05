import React, { Component } from 'react';

class OnboardingLoading extends Component {
	render() {
		return (
			<div className="hero is-fullheight">
				<div className="hero-body" style={{ justifyContent: 'center' }}>
					<div className="has-text-centered" style={{ width: '100%' }}>
						<span className="is-light" style={{ fontFamily: 'Inter UI', color: '#ababab', fontWeight: 'bold' }}>Logging you in...</span>
					</div>
				</div>
			</div>
		)
	}
}

export default OnboardingLoading;