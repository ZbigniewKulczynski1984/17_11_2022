import React from 'react';
import Countdown from './Countdown';

const App = () => {
	return (
		<div>
			<Countdown name="breakfast" time="07:00"/>
			<Countdown name="lunch" time="15:00"/>
			<Countdown name="dinner" time="22:00"/>
		</div>
	);
};

export default App;
