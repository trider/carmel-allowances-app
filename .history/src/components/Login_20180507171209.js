import React, {Component} from 'react';
import {Button, HelpBlock, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import '../styles/App.css';

class Login extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleChange = this
			.handleChange
			.bind(this);

		this.state = {
			value: ''
		};
	}

	getValidationState() {
		const length = this.state.value.length;
		if (length > 10) 
			return 'success';
		else if (length > 5) 
			return 'warning';
		else if (length > 0) 
			return 'error';
		return null;
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" name={this.state.name}
							value={this.state.name} onChange={this.handleChange} />
					</label>
					<input type="submit" name="Submit"/>
				</form>
		);
	}
}

export default Login;