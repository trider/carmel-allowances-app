import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';

class Allowances extends Component {

	
	



	

	render() {
		return this.state.isAuthenticated
? (
		<Panel className="App-container">
			<Panel.Heading>
				<Panel.Title componentClass="h3">Welcome</Panel.Title>
			</Panel.Heading>
			<Panel.Body>Panel content</Panel.Body>
		</Panel>
	): (<Login login={this} />)

	}
}

export default Home;