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

		);
	}
}

export default Login;