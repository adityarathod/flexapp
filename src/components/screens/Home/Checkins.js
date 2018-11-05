import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { todaysDate, findCheckins, prettifyDate } from '../../../util/util';

import ScreenHeader from '../../ui/ScreenHeader';
import ColorfulCard from '../../ui/ColorfulCard';


const Checkins = props => {
	if (!Array.isArray(props.appointments)) {
		return (
			<Redirect to="/onboarding/login" />
		)
	}
	return (
		<section className="section" style={{ paddingTop: '18px' }}>
			<div className="container">
				<ScreenHeader subtitle={todaysDate()} title="Checkins" />
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					{findCheckins(props.appointments).map(checkin => {
						return (
							<ColorfulCard key={checkin.uniqueID} title={checkin.title.replace('-', ' - ').replace('for Flex Time', '').replace('Checked in by ', 'Checkin: ')} subtitle={prettifyDate(checkin.start)} color="linear-gradient(125.18deg, #00C8C8 0.83%, #0A9EC4 98.75%)" />
						)
					})}
				</div>
			</div>
		</section>
	)
}

// <ColorfulCard title="We The People Practice" subtitle="Thursday, December 21" color="linear-gradient(125.18deg, #00C8C8 0.83%, #0A9EC4 98.75%)" />

const mapStateToProps = state => {
	return {
		appointments: state.appointments
	}
}

export default connect(mapStateToProps)(Checkins); 