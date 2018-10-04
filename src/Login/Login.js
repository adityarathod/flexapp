import React, { Component } from 'react';

import './Login.scss';
import logoWhite from '../logoWhite.svg';
import stateWrapper from '../statewrapper/statewrapper';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		}
		this.changeUsername = this.changeUsername.bind(this)
		this.changePassword = this.changePassword.bind(this)
	}
	changeUsername(e) {
		this.setState({
			username: e.target.value
		});
	}
	changePassword(e) {
		this.setState({
			password: e.target.value
		});
	}
	login() {

	}
	render() {
		return (
			<div className="hero is-transparent has-text-white loginhero is-fullheight">
				<div className="hero-body">
					<div className="container has-text-centered">
						<img src={logoWhite} style={{ width: '100px' }} alt='FLEX logo' />
						<br />
						<br />
						<h1 className="title has-text-white" style={{ letterSpacing: '-2px' }}>
							Login to FLEX<sub><i><small>&beta;</small></i></sub>
						</h1>
						<div className="field">
							<label className="label has-text-white">Username</label>
							<div className="control">
								<input className="input" type="text" value={this.state.username} onChange={this.changeUsername} placeholder="username" />
							</div>
						</div>
						<div className="field">
							<label className="label has-text-white">Password</label>
							<div className="control">
								<input className="input" type="password" value={this.state.password} onChange={this.changePassword} placeholder="password" />
							</div>
						</div>
						<button className="button is-link">Login</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
