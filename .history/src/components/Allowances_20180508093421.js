import React, {Component} from 'react';
import { Button, Panel } from 'react-bootstrap';
import Navigation from './Navigation';

class Allowances extends Component {

	displayPanel() {
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title componentClass="h3">Welcome</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					<Button onClick={this.props.login.handleLogout}>Logout</Button>	
				</Panel.Body>
			</Panel>
		)
	}

	render() {
		return (
			<div className="App-container">{this.displayPanel()}	 
			</div>
		) 

	}
}

export default Allowances;