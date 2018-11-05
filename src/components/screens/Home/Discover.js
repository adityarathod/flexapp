import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { todaysDate } from '../../../util/util';
import ScreenHeader from '../../ui/ScreenHeader';
import ColorfulCard from '../../ui/ColorfulCard';
import ImageCard from '../../ui/ImageCard';



const Discover = props => {
	if (!Array.isArray(props.appointments)) {
		return (
			<Redirect to="/onboarding/login" />
		)
	}
	return (
		<section className="section" style={{ paddingTop: '18px' }}>
			<div className="container">
				<ScreenHeader subtitle={todaysDate()} title="Discover" />
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<ImageCard title="Chemistry and Physics Help" subtitle="Wednesday, December 20" />
					<ImageCard title="We The People Practice" subtitle="Thursday, December 21" />
				</div>
			</div>
		</section>
	)
}

const mapStateToProps = state => {
	return {
		appointments: state.appointments
	}
}

export default connect(mapStateToProps)(Discover); 
