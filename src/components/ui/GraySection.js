import React from 'react';

const GraySection = props => (
	<section className="section has-background-light has-text-centered" style={{ fontFamily: "'Inter UI', sans-serif" }}>
		{props.children}
	</section>
)

export default GraySection;