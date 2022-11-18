import React from 'react';

const EditEvent = () => {
	return (
		<div className="edit-event">
			<div className="edit-event__input-group">
				<label htmlFor="name">name</label>
				<input type="text" id="name" name="name" />
			</div>
		</div>
	);
};

export default EditEvent;
