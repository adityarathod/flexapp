import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import OnboardingWelcome from './OnboardingWelcome';
import OnboardingLogin from './OnboardingLogin';
import OnboardingLoading from './OnboardingLoading';

class Onboarding extends Component {
	render() {
		return (
			<React.Fragment>
				<Route path="/onboarding/2" component={OnboardingLogin} />
				<Route path="/onboarding/3" component={OnboardingLoading} />
				<Route path="/onboarding" component={OnboardingWelcome} />
			</React.Fragment>
		)
	}
}

export default Onboarding;