import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Appointments from './Appointments';
import TabBar from './TabBar/TabBar';
import Discover from './Discover';
import Checkins from './Checkins';


class Home extends Component {
	componentDidMount() {
		document.body.scrollTop = 0;
	}
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route path="/home/appointments" component={Appointments} />
					<Route path="/home/discover" component={Discover} />
					<Route path="/home/checkins" component={Checkins} />
				</Switch>
				<TabBar />
			</React.Fragment>
		)
	}
}

export default Home;