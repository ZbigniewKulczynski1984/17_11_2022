import React, { Component } from 'react';
import Countdown from './Countdown';
import EditEvent from './EditEvent';
import '../App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			events: [
				{ id: 0, name: 'breakfast', time: '07:00' },
				{ id: 1, name: 'lunch', time: '15:00' },
				{ id: 2, name: 'dinner', time: '19:00' },
			],
		};
	}

	render() {
		const events = this.state.events.map((el) => {
			return <Countdown key={el.id} name={el.name} time={el.time} />;
		});
		return (
			<div className="app">
				{events}
				<EditEvent onSave={() => alert("A")}/>
			</div>
		);
	}
}

export default App;
