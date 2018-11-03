import React from 'react';

import Today from './Today.svg';
import TodayActive from './TodayActive.svg';
import Discover from './Discover.svg';
import DiscoverActive from './DiscoverActive.svg';
import Checkins from './Checkins.svg';
import CheckinsActive from './CheckinsActive.svg';


var tabStyle = {
	position: 'fixed',
	background: 'rgba(248, 248, 248, 0.67)',
	backdropFilter: 'blur(21.87px)',
	WebkitBackdropFilter: 'blur(21.87px)',
	left: '0px',
	bottom: '0px',
	width: '100%',
	height: '55px',
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center'
}

const TabBar = props => {
	var currentTab = props.currentTab || '';
	return (
		<div style={tabStyle}>
			<img
				src={currentTab === 'today' ? TodayActive : Today}
				alt="today" onClick={props.clicked}
				data-tabname="today"
				style={{ cursor: 'pointer' }}
			/>
			<img
				src={currentTab === 'discover' ? DiscoverActive : Discover}
				alt="discover" onClick={props.clicked}
				data-tabname="discover"
				style={{ cursor: 'pointer' }}
			/>
			<img
				src={currentTab === 'checkins' ? CheckinsActive : Checkins}
				alt="checkins" onClick={props.clicked}
				data-tabname="checkins"
				style={{ cursor: 'pointer' }}
			/>
		</div>
	)
}

export default TabBar;