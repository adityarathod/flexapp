import React from 'react';

const ScreenHeader = props => (
	<div className="flex-screen-heading" style={{ marginBottom: '20px' }}>
		<span style={{ color: '#808080', fontWeight: 'bold', fontSize: '14px', letterSpacing: '-0.00615385em', fontFamily: 'Inter UI' }}>{props.subtitle.toUpperCase()}</span>
		<h1 className="title" style={{ fontSize: '34px', fontWeight: 'bold', fontFamily: 'Inter UI', color: 'black' }}>{props.title}</h1>
	</div>
)
export default ScreenHeader;