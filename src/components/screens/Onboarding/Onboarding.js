import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './Welcome';
import Login from './Login';
import Loading from './Loading';

import SequenceForm from 'react-sequence';

const Onboarding = () => (
	<React.Fragment>
		<SequenceForm>
			<Welcome />
			<Login />
			<Loading />
		</SequenceForm>
		{/* <Route path="/onboarding/login" component={Login} />
		<Route path="/onboarding/loading" component={Loading} />
		<Route exact path="/onboarding" component={Welcome} /> */}
	</React.Fragment>
)
export default Onboarding;