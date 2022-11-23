import React, { Component } from 'react';
import uniqid from 'uniqid';
import Countdown from './Countdown';
import EditEvent from './EditEvent';
import '../App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			events: [
				{ id: 0, name: 'breakfast', hour: '07', minute: '00' },
				{ id: 1, name: 'lunch', hour: '15', minute: '00' },
				{ id: 2, name: 'dinner', hour: '19', minute: '00' }
			],
			editedEvents:{
				id: uniqid(),
				name: "",
				hour: "",
				minute: ""
			}
		};
		this.handleEditEvent = this.handleEditEvent.bind(this);
		this.handleSaveEvent = this.handleSaveEvent.bind(this);
		this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
	}

	handleEditEvent(val) {
		this.setState(prevState => {
			return {
				editedEvents: Object.assign(prevState.editedEvents, val)
			}
		});
	}

	handleSaveEvent() {
		this.setState(prevState => ({
			events: [...prevState.events, prevState.editedEvents],
			editedEvents:{
				id: uniqid(),
				name: "",
				hour: "",
				minute: ""
			}
		}));
	}

	handleRemoveEvent(id) {

	}

	render() {
		const events = this.state.events.map((el) => {
			return <Countdown 
			key={el.id} 
			name={el.name} 
			hour={el.hour} 
			minute={el.minute} 
			onRemove={id => this.handleRemoveEvent(id)}
			/>;
		});
		return (
			<div className="app">
				{events}
				<EditEvent
				name={this.state.editedEvents.name}
				hour={this.state.editedEvents.hour}
				minute={this.state.editedEvents.minute}
				onInputChange={val => this.handleEditEvent(val)} onSave={() => this.handleSaveEvent()} />
			</div>
		);
	}
}

export default App;
