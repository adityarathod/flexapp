import React, { Component } from 'react';

class ScreenHeader extends Component {
	render() {
		return (
			<div className="flex-screen-heading" style={{ marginBottom: '20px' }}>
				<span style={{ color: '#808080', fontWeight: 'bold', fontSize: '14px', letterSpacing: '-0.00615385em', fontFamily: 'Inter UI' }}>{this.props.subtitle.toUpperCase()}</span>
				<h1 className="title" style={{ fontSize: '34px', fontWeight: 'bold', fontFamily: 'Inter UI', color: 'black' }}>{this.props.title}</h1>
			</div>
		)
	}
}

export default ScreenHeader;