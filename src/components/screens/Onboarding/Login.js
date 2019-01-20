import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


import { login } from '../../../state/actions';
import { connect } from 'react-redux';

import './Login.scss';

class Login extends Component {
	constructor() {
		super()
		this.state = { username: '', password: '' }
	}
	usernameChange(e) {
		this.setState({ username: e.target.value })
	}
	passwordChange(e) {
		this.setState({ password: e.target.value })
	}
	dispatchLogin() {
		this.props.dispatchLogin(this.state.username, this.state.password)
	}
	static getDerivedStateFromProps(props, state) {
		if (props.credentials.username && props.credentials.password) {
			props.dispatchLogin(props.credentials.username, props.credentials.password)
			return Object.assign({}, state, {
				username: props.credentials.username,
				password: props.credentials.password
			})
		}
		return state
	}
	render() {
		if (this.props.isLoading) {
			this.props.gotoNext();
		}
		return (
			<div className="hero is-fullheight">
				<div className="hero-body" style={{ justifyContent: 'center' }}>
					<div className="has-text-centered" style={{ width: '100%' }}>
						<h1 className="title Onboarding-Login-title">
							Login to FLEX
							</h1>
						<h2 className="subtitle Onboarding-Login-subtitle">Log in using your FlexTime account.</h2>
						<br />
						<br />
						<input type="text" className="input Onboarding-Login-input" placeholder="username" onChange={this.usernameChange.bind(this)} style={{ marginBottom: '14px' }} value={this.state.username} />
						<br />
						<input type="password" className="input Onboarding-Login-input" onChange={this.passwordChange.bind(this)} placeholder="password" value={this.state.password} />
						<br /><br />
						<button className="button is-link" onClick={this.dispatchLogin.bind(this)} style={{ background: 'none', outline: 'none', color: '#007AFF', border: 'none', fontWeight: '500', fontSize: '13pt' }}>
							Login
						</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		isLoading: state.ui.isLoading,
		credentials: state.credentials
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatchLogin: (username, password) => {
			dispatch(login({ username: username, password: password }))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);