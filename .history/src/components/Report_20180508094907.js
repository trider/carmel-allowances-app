import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';

class Report extends Component {

	constructor(props) {
		super(props);
		this.state = {
			report: []
		}
	}

	displayPanel() {
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title componentClass="h3">Reports</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					 <p>Total</p>
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