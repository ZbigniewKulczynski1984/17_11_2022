import React from 'react';

const Countdown = (props) => (
	<h1>
		<div className="countdown">
			<strong>{props.name}</strong> - {props.time}
		</div>
	</h1>
);

export default Countdown;
