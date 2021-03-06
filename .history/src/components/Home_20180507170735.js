import React, {Component} from 'react';
import {Panel, Button, Col, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';
import Login from './Login';
import '../styles/App.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			isPopulated: false,
			displayTerms: false
		};

		this.handleChange = this
			.handleChange
			.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({name: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.displayTermsComponent(this.state.name)
	}

	render() {
		return <Login />
	}
}

export default Home;
