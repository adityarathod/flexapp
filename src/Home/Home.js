import React, { Component } from 'react';
// import { MemoryRouter as Router, Route } from 'react-router-dom';

import ScreenHeader from './ScreenHeader';

class Home extends Component {
	render() {
		return (
			<section className="section" style={{ paddingTop: '18px' }}>
				<div className="container">
					<ScreenHeader subtitle="Today, July 4" title="Appointments" />
					<div>
						<div className="card" style={{ background: "linear-gradient(125.18deg, #00cd86 0.83%, #3ab52a 98.75%)", boxShadow: "0px 16px 16px rgba(0, 0, 0, 0.16)", borderRadius: "14px", width: '100%', height: '194px' }}>

						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Home;