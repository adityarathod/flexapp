import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getOfferings } from '../../../state/actions';

import { todaysDate, sortOfferingsReverse, prettifyDate } from '../../../util/util';
import ScreenHeader from '../../ui/ScreenHeader';
import ColorfulCard from '../../ui/ColorfulCard';
import ImageCard from '../../ui/ImageCard';

class Discover extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		offeringsSorted:
	// 	}
	// }
	componentDidMount() {
		if (!Array.isArray(this.props.appointments)) {
			return
		}
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
					<ScreenHeader subtitle={todaysDate()} title="Discover" />
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						{sortOfferingsReverse(this.props.offerings.map(off => {
							var numAvailable = parseInt(off.offeringCap) - off.numAppts
							var displayString = isNaN(numAvailable) ? ` • Available` : ` • ${numAvailable} spots left`
							return <ColorfulCard key={off.uniqueID} title={off.offering + ' with ' + off.teacherLast} subtitle={prettifyDate(off.offeringDate) + displayString} color="linear-gradient(125.18deg, #885AFF 0.83%, #1749E5 98.75%)" />
						}))}
					</div>
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		appointments: state.appointments,
		offerings: state.offerings,
		loadingOfferings: state.loadingOfferings,
		credentials: state.credentials
	}
}
const mapDispatchToProps = dispatch => {
	return {
		getOfferings: (creds) => {
			dispatch(getOfferings(creds))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover); 
