import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import dayjs from 'dayjs'

import ScreenHeader from '../../ui/ScreenHeader';
import ColorfulCard from '../../ui/ColorfulCard';
import TabBar from './TabBar/TabBar';

class Home extends Component {
	removeStopWords(value) {
		var result = value
		var stopWords = [
			{ from: 'You made an ', to: '' },
			{ from: 'Flex Time -', to: 'Flex - ' }
		]
		for (var i = 0; i < stopWords.length; i++) {
			result = result.replace(stopWords[i].from, stopWords[i].to)
		}
		result = result.split('for Flex -')[0] + 'for FLEX'
		return this.capitalizeFirstLetter(result.trim())
	}
	capitalizeFirstLetter(value) {
		return value[0].toUpperCase() + value.substring(1)
	}
	sortAppointments(apptsArr) {
		return apptsArr.sort((a, b) => {
			return dayjs(a.start) - dayjs(b.start)
		})
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
					<ScreenHeader subtitle="Today, July 4" title="Appointments" />
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						{this.sortAppointments(this.props.appointments).reverse().map(appt => {
							if (appt.title.indexOf('Checked in by') !== -1) {
								return
							}
							var gradient
							if (appt.teacherEvent === 1) {
								gradient = 'linear-gradient(125.18deg, #FC881B 0.83%, #F22553 98.75%)'
							} else {
								gradient = 'linear-gradient(125.18deg, #00cd86 0.83%, #3ab52a 98.75%)'
							}
							return (
								<ColorfulCard key={appt.uniqueID} title={this.removeStopWords(appt.title)} subtitle={appt.start} color={gradient} />
							)
						})}
						{/* <ColorfulCard title="Appointment with Berbawy for FLEX" subtitle="Today, October 17" color="linear-gradient(125.18deg, #00cd86 0.83%, #3ab52a 98.75%)" />
						<ColorfulCard title="Senior Class Dance Practice" subtitle="Tomorrow, October 18" color="linear-gradient(125.18deg, #FC881B 0.83%, #F22553 98.75%)" />
						<ColorfulCard title="Chemistry and Physics Help" subtitle="Wednesday, December 20" color="linear-gradient(125.18deg, #885AFF 0.83%, #1749E5 98.75%)" />
						<ColorfulCard title="We The People Practice" subtitle="Thursday, December 21" color="linear-gradient(125.18deg, #00C8C8 0.83%, #0A9EC4 98.75%)" /> */}
					</div>
					<TabBar />
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		appointments: state.appointments
	}
}

export default connect(mapStateToProps)(Home);