import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import './Loading.scss';

const Loading = props => {
	if (Array.isArray(props.appointments) && props.credentials.username) {
		return (
			<Redirect to="/home" />
		)
	}
	return (
		<div className="hero is-fullheight">
			<div className="hero-body" style={{ justifyContent: 'center' }}>
				<div className="has-text-centered" style={{ width: '100%' }}>
					<h1 className="title" style={{ marginBottom: '0' }}>
						<span role="img" aria-label="an emoji">🙌</span>
					</h1>
					<br />
					<span className="is-light Onboarding-Loading-loadingIndicator">Logging you in...</span>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		credentials: state.credentials,
		appointments: state.appointments
	}
}

export default connect(mapStateToProps, null)(Loading);