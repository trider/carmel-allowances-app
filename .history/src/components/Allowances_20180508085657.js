import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';

class Allowances extends Component {

// 



	handleChange(event) {
		if (event.target.name === 'user') {
			this.setState({user: event.target.value});
		} else {
			this.setState({password: event.target.value});
		}
	}

	handleLogin(event) {
		event.preventDefault();
		this.setState({isAuthenticated: true});
	}

handleLogout(event) {
	event.preventDefault();
	this.setState({isAuthenticated: false});
}

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