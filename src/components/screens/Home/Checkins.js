import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { todaysDate, findCheckins, prettifyDate, prettifyCheckin } from '../../../util/util';

import ScreenHeader from '../../ui/ScreenHeader';
import ColorfulCard from '../../ui/ColorfulCard';

import * as Barcode from 'react-barcode';


class Checkins extends Component {
	constructor(props) {
		super(props);
		this.barcodeView = React.createRef();
	}
	render() {
		if (!Array.isArray(this.props.appointments)) {
			return (
				<Redirect to="/onboarding/login" />
			)
		}
		return (
			<section className="section" style={{ paddingTop: '18px' }}>
				<div className="container">
					<ScreenHeader subtitle={todaysDate()} title="Checkins" />
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<Barcode value={this.props.credentials.username} format="CODE39" width="2" />
						<br />
						{findCheckins(this.props.appointments).map(checkin => {
							return (
								<ColorfulCard key={checkin.uniqueID} title={prettifyCheckin(checkin.title, checkin.start)} subtitle={prettifyDate(checkin.start)} color="linear-gradient(125.18deg, #00C8C8 0.83%, #0A9EC4 98.75%)" />
							)
						})}
					</div>

				</div>
			</section>
		)
	}
}
// <ColorfulCard title="We The People Practice" subtitle="Thursday, December 21" color="linear-gradient(125.18deg, #00C8C8 0.83%, #0A9EC4 98.75%)" />

const mapStateToProps = state => {
	return {
		appointments: state.appointments,
		credentials: state.credentials
	}
}

export default connect(mapStateToProps)(Checkins); 