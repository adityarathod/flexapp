import React from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

const Login = () => (
	<div className="hero is-fullheight">
		<div className="hero-body" style={{ justifyContent: 'center' }}>
			<div className="has-text-centered" style={{ width: '100%' }}>
				<h1 className="title Onboarding-Login-title">
					Login to FLEX
							</h1>
				<h2 className="subtitle Onboarding-Login-subtitle">Log in using your FlexTime account.</h2>
				<br />
				<br />
				<input type="text" className="input Onboarding-Login-input" placeholder="username" style={{ marginBottom: '14px' }} />
				<br />
				<input type="password" className="input Onboarding-Login-input" placeholder="password" />
				<br /> <br />
				<br />
				<Link to="/onboarding/loading" style={{ fontSize: '18px', fontFamily: 'Inter UI', fontWeight: '500' }}>
					Login
				</Link>
			</div>
		</div>
	</div>
)

export default Login;