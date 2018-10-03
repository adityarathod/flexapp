import React, { Component } from 'react';

import Logo from '../logo.svg';

class Login extends Component {
	render() {
		return (
			<section className="section">
				<div className="container has-text-centered">
					<img src={Logo} style={{ width: '100px' }} alt='FLEX logo' />
					<br />
					<h1 className="title">
						Login to FLEX Beta
					</h1>
				</div>
			</section>
		);
	}
}

export default Login;
