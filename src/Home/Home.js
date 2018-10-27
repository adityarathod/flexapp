import React, { Component } from 'react';
// import { MemoryRouter as Router, Route } from 'react-router-dom';

import ScreenHeader from './ScreenHeader';
import AppointmentCard from './AppointmentCard';

class Home extends Component {
	render() {
		return (
			<section className="section" style={{ paddingTop: '18px' }}>
				<div className="container">
					<ScreenHeader subtitle="Today, July 4" title="Appointments" />
					<div>
						<AppointmentCard title="Appointment with Berbawy for FLEX" subtitle="Today, October 17" color="linear-gradient(125.18deg, #00cd86 0.83%, #3ab52a 98.75%)" />
						<AppointmentCard title="Senior Class Dance Practice" subtitle="Tomorrow, October 18" color="linear-gradient(125.18deg, #FC881B 0.83%, #F22553 98.75%)" />
						<AppointmentCard title="Chemistry and Physics Help" subtitle="Wednesday, December 20" color="linear-gradient(125.18deg, #885AFF 0.83%, #1749E5 98.75%)" />
						<AppointmentCard title="We The People &#x000D; Practice" subtitle="Thursday, December 21" color="linear-gradient(125.18deg, #00C8C8 0.83%, #0A9EC4 98.75%)" />
					</div>
					<div style={{
						position: 'fixed', background: 'rgba(248, 248, 248, 0.92)', backdropFilter: 'blur(21.87px)', left: '0px', bottom: '0px', width: '100%', height: '50px'
					}}>
						hi
					</div>
				</div>
			</section>
		)
	}
}

export default Home;