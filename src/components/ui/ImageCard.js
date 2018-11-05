import React from 'react';

const ImageCard = props => {
	var imageURL = `black`
	return (
		<div className="card" style={{
			background: imageURL, boxShadow: "0px 16px 16px rgba(0, 0, 0, 0.16)", borderRadius: "14px", width: '100%', height: '124px', padding: '18px', marginBottom: '24px', maxWidth: '900px'
		}}>
			<div className="card__subtitle" style={{ color: 'white', opacity: '0.7', fontWeight: '600', lineHeight: '14px', fontSize: '15px', letterSpacing: '-0.016em' }}>
				{props.subtitle.toUpperCase()}
			</div>
			<div className="card__title" style={{
				fontSize: '28px', letterSpacing: '-0.015em', lineHeight: '34px', marginTop: '7px', 'color': 'white', fontWeight: 'bold'
			}}>
				{props.title}
			</div>
		</div>
	)
}
export default ImageCard;