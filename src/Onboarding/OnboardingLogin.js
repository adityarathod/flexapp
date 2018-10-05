import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OnboardingLogin extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="hero is-fullheight">
					<div className="hero-body" style={{ justifyContent: 'center' }}>
						<div className="has-text-centered" style={{ width: '100%' }}>
							<h1 className="title" style={{ fontFamily: 'Inter UI', fontSize: '2rem', marginBottom: '10px', letterSpacing: '-0.05rem', fontWeight: '800', fontSize: '36px', color: 'black' }}>
								Login to FLEX
							</h1>
							<h2 className="subtitle" style={{ fontFamily: 'Inter UI', marginTop: '10px', fontSize: '15px', color: 'black' }}>Log in using your FlexTime account.</h2>
							<br />
							<br />
							<input type="text" className="input" placeholder="username" style={{ boxShadow: 'none', marginBottom: '14px' }} />
							<input type="password" className="input" placeholder="password" style={{ boxShadow: 'none' }} />
							<br /> <br />
							<br />
							<Link to="/home/onboard-loading">
								<a style={{ fontSize: '18px', fontFamily: 'Inter UI', fontWeight: '500' }}>Login</a>
							</Link>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default OnboardingLogin;