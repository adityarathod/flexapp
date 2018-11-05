import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import ScreenHeader from '../../ui/ScreenHeader';
import ColorfulCard from '../../ui/ColorfulCard';

import { formatApptName, sortAppointmentsReverse, prettifyDate, todaysDate } from '../../../util/util';

const Appointments = props => {
	if (!Array.isArray(props.appointments)) {
		return (
			<Redirect to="/onboarding/login" />
		)
	}

	return (
		<section className="section" style={{ paddingTop: '18px' }}>
			<div className="container">
				<ScreenHeader subtitle={todaysDate()} title="Appointments" />
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					{sortAppointmentsReverse(props.appointments).map(appt => {
						if (appt.title.indexOf('Checked in by') !== -1) {
							return (
								<React.Fragment key={Math.random() * 100}>
								</React.Fragment>
							)
						}
						var gradient
						if (appt.teacherEvent === 1) {
							gradient = 'linear-gradient(125.18deg, #FC881B 0.83%, #F22553 98.75%)'
						} else {
							gradient = 'linear-gradient(125.18deg, #00cd86 0.83%, #3ab52a 98.75%)'
						}
						return (
							<ColorfulCard key={appt.uniqueID} title={formatApptName(appt.title)} subtitle={prettifyDate(appt.start)} color={gradient} />
						)
					})}
					{/* <ColorfulCard title="Appointment with Berbawy for FLEX" subtitle="Today, October 17" color="linear-gradient(125.18deg, #00cd86 0.83%, #3ab52a 98.75%)" />
						<ColorfulCard title="Senior Class Dance Practice" subtitle="Tomorrow, October 18" color="linear-gradient(125.18deg, #FC881B 0.83%, #F22553 98.75%)" />
						<ColorfulCard title="Chemistry and Physics Help" subtitle="Wednesday, December 20" color="linear-gradient(125.18deg, #885AFF 0.83%, #1749E5 98.75%)" />
						<ColorfulCard title="We The People Practice" subtitle="Thursday, December 21" color="linear-gradient(125.18deg, #00C8C8 0.83%, #0A9EC4 98.75%)" /> */}
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

export default connect(mapStateToProps)(Appointments);