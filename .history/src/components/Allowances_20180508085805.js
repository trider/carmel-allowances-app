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

	render() {
		return this.state.isAuthenticated
			? ()
			: (<Login login={this}/>)

	}
}

export default Allowances;