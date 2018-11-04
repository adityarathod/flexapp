import React from 'react';
import { Link, Redirect } from 'react-router-dom';


import { connect } from 'react-redux';

import './Welcome.scss';

const Welcome = props => {
	if (props.credentials.username && props.credentials.password) {
		return (
			<Redirect to="/onboarding/login" />
		)
	}
	return (
		<React.Fragment>
			<div className="has-text-centered Onboarding-Welcome-buttonContainer">
				<Link to="/onboarding/login">
					<button className="button is-link Onboarding-Welcome-blueButton">
						Get Started
				</button>
				</Link>
			</div>
			<div className="hero is-fullheight">
				<div className="hero-body Onboarding-Welcome-heroBody">
					<div className="has-text-centered" style={{ width: '100%' }}>
						<h1 className="subtitle Onboarding-Welcome-subtitle">welcome to</h1>
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

const mapStateToProps = state => {
	return {
		credentials: state.credentials
	}
}

export default connect(mapStateToProps)(Welcome);