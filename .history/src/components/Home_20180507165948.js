import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

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
		this.handleSubmit = this
			.handleSubmit
			.bind(this);
	}

	handleChange(event) {
		this.setState({name: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.displayTermsComponent(this.state.name)
	}

	render() {
		return (
			<div>
				<Panel>
					<Panel.Heading>Panel heading without a title</Panel.Heading>
					<Panel.Body>Panel content</Panel.Body>
				</Panel>
				<Panel>
					<Panel.Heading>
						<Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
					</Panel.Heading>
					<Panel.Body>Panel content</Panel.Body>
				</Panel>
		</div>
		)
	}
}

export default Home;
