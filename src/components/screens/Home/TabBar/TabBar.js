import React from 'react';

import Today from './Today.svg';
import TodayActive from './TodayActive.svg';
import Discover from './Discover.svg';
import DiscoverActive from './DiscoverActive.svg';
import Checkins from './Checkins.svg';
import CheckinsActive from './CheckinsActive.svg';

import { changeTab } from '../../../../state/actions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

var tabStyle = {
	position: 'fixed',
	background: 'rgba(248, 248, 248, 0.92)',
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
	return (
		<div style={tabStyle}>
			<Link to="/home/appointments">
				<img
					src={props.currentTab === 'today' ? TodayActive : Today}
					alt="today" onClick={props.onTabClick}
					data-tabname="today"
					style={{ cursor: 'pointer' }}
				/>
			</Link>
			<Link to="/home/discover">
				<img
					src={props.currentTab === 'discover' ? DiscoverActive : Discover}
					alt="discover" onClick={props.onTabClick}
					data-tabname="discover"
					style={{ cursor: 'pointer' }}
				/>
			</Link>
			<Link to="/home/checkin">
				<img
					src={props.currentTab === 'checkins' ? CheckinsActive : Checkins}
					alt="checkins" onClick={props.onTabClick}
					data-tabname="checkins"
					style={{ cursor: 'pointer' }}
				/>
			</Link>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		currentTab: state.ui.currentTab
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTabClick: e => {
			dispatch(changeTab(e.target.dataset.tabname))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);