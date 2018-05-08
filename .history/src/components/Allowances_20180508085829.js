import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class Allowances extends Component {

	displayPanel() {
		return (
			<Panel className="App-container">
				<Panel.Heading>
					<Panel.Title componentClass="h3">Welcome</Panel.Title>
				</Panel.Heading>
				<Panel.Body>Panel content</Panel.Body>
			</Panel>
		)
	}

	return (
			<div className="App-container">
				{this.displayPanel()}	 
			</div>
		) 
}

export default Allowances;