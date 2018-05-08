import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';

class Report extends Component {

constructor(props) {
	super(props);
	this.state = {
		isAuthenticated: false,
		user: 'admin@app.com',
		password: '12345'
	};

	displayPanel() {
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title componentClass="h3">Welcome</Panel.Title>
				</Panel.Heading>
				<Panel.Body></Panel.Body>
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