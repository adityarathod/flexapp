import React from 'react';

import './Loading.scss';

const Loading = () => (
	<div className="hero is-fullheight">
		<div className="hero-body" style={{ justifyContent: 'center' }}>
			<div className="has-text-centered" style={{ width: '100%' }}>
				<h1 className="title" style={{ marginBottom: '0' }}>
					<span role="img" aria-label="an emoji">🙌</span>
				</h1>
				<br />
				<span className="is-light Onboarding-Loading-loadingIndicator">Logging you in...</span>
			</div>
		</div>
	</div>
)

export default Loading;