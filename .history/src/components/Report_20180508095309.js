import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';

class Report extends Component {

	constructor(props) {
		super(props);
		this.state = {
			report: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handleChange(event) {
		if (event.target.name === 'user') {
			this.setState({user: event.target.value});
		} else {
			this.setState({password: event.target.value});
		}
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	handlePrev(event) {
		event.preventDefault();
		this.setState({isAuthenticated: false});
	}
	handleNext(event) {
		event.preventDefault();
		this.setState({isAuthenticated: false});
	}

	displayPanel() {
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title componentClass="h3">Reports</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					<p>Items: {this.state.report.length}</p>
				</Panel.Body>
			</Panel>
		)
	}

	render() {
		return (
			<div className="App-container">
				{this.displayPanel()}
			</div>
		)
	}
}

export default Report;