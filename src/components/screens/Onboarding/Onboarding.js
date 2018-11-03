import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './Welcome';
import Login from './Login';
import Loading from './Loading';

const Onboarding = () => (
	<React.Fragment>
		<Route path="/onboarding/login" component={Login} />
		<Route path="/onboarding/loading" component={Loading} />
		<Route path="/onboarding" component={Welcome} />
	</React.Fragment>
)
export default Onboarding;