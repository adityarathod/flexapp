import React from 'react';
import { Route } from 'react-router-dom';

import Appointments from './Appointments';
import TabBar from './TabBar/TabBar';
import Discover from './Discover';


const Home = () => (
	<React.Fragment>
		<Route path="/home/appointments" component={Appointments} />
		<Route path="/home/discover" component={Discover} />
		<TabBar />
	</React.Fragment>
)
export default Home;