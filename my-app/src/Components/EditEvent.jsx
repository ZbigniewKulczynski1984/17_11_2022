import React from 'react';

const EditEvent = props => {
	return (
		<div className="edit-event">
			<div className="edit-event__input-group">
				<label htmlFor="name">name</label>
				<input 
                type="text" 
                id="name" 
                name="name"
                onChange={e=> console.log(e.target.name, e.target.value)}
                />
			</div>
            <div className="edit-event__input-group">
				<label htmlFor="hour">hour</label>
				<input 
                type="tel" 
                id="hour" 
                name="hour" 
                onChange={e=> console.log(e.target.name, e.target.value)}
                />
			</div>
            <div className="edit-event__input-group">
				<label htmlFor="minute">minute</label>
				<input 
                type="tel" 
                id="minute" 
                name="minute" 
                onChange={e=> console.log(e.target.name, e.target.value)}
                />
			</div>
            <button> Cancel</button>
            <button onClick={() => props.onSave()}>OK</button>
		</div>
	);
};

export default EditEvent;
