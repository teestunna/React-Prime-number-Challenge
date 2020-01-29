import React from 'react';

//Component to Render the Form to input Number and submit
const Form = props => (

	<form onSubmit={props.finalAnswer}>
		<input type="text" placeholder="Enter Number..." onChange={props.getNumber} value={ props.getValue }/>
		<p className="submitButton">
			<button disabled={ !props.getValue }>Submit</button>
		</p>
	</form>
);

export default Form;