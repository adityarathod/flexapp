import React from 'react';

const ImageGrid = props => (
	<section className="section has-text-centered" style={{ fontFamily: "'Inter UI', sans-serif" }}>
		<div className="columns">
			{props.images.map((img, idx) => {
				return (
					<div className="column" key={idx}>
						<h1 className="title">{img.title}</h1>
						<img src={img.data} alt='Screenshot' />
					</div>
				)
			})}
		</div>
	</section>
)

export default ImageGrid;
