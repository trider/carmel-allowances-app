import React, {Component} from 'react';
import { Button,Panel } from 'react-bootstrap';

class Allowances extends Component {

	displayPanel() {
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title componentClass="h3">Welcome</Panel.Title>
				</Panel.Heading>
				<Panel.Body>Panel content</Panel.Body>
			</Panel>
		)
	}

	render() {
		return (
			<div className="App-container">
				<Button onClick={this.props.login.handleLogout}>Logout</Button>	
				{this.displayPanel()}	 
			</div>
		) 

	}
}

export default Allowances;