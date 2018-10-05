import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import OnboardingWelcome from './OnboardingWelcome';
import OnboardingLogin from './OnboardingLogin';
import OnboardingLoading from './OnboardingLoading';

class Onboarding extends Component {
	render() {
		return (
			<React.Fragment>
				<Route path="/home/welcome" component={OnboardingWelcome} />
				<Route path="/home/onboard-2" component={OnboardingLogin} />
				<Route path="/home/onboard-loading" component={OnboardingLoading} />
			</React.Fragment>
		)
	}
}

export default Onboarding;