import React, {Component} from 'react';
import {Button, Col, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import '../styles/App.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			password: '',
			authenticated: false
		};

	}

	

	render() {
		const txt = "Minimal Viable Development Services (MVDS)"
		return this.login(txt)
	}
}

export default Login;