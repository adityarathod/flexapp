import React, { Component } from 'react';

import './Login.scss';
import logoWhite from '../logoWhite.svg';

class Login extends Component {
	render() {
		return (
			<div className="hero is-transparent has-text-white loginhero is-fullheight">
				<div className="hero-body">
					<div className="container has-text-centered">
						<img src={logoWhite} style={{ width: '100px' }} alt='FLEX logo' />
						<br />
						<br />
						<h1 className="title">
							Login to FLEX Beta
					</h1>
						<div className="field">
							<label className="label has-text-white">Username</label>
							<div className="control">
								<input className="input" type="text" v-model="username" placeholder="username" />
							</div>
						</div>
						<div className="field">
							<label className="label has-text-white">Password</label>
							<div className="control">
								<input className="input" type="password" v-model="password" placeholder="password" />
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
