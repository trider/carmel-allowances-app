import React, {Component} from 'react';
import {
	Panel,
	Button,
	Form,
	Col,
	FormGroup,
	FormControl,
	ControlLabel
} from 'react-bootstrap';

import '../styles/App.css';

class Login extends Component {

	displayForm() {
		return (
			<Form horizontal onSubmit={this.props.login.handleLogin}>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Email
					</Col>
					<Col sm={10}>
						<FormControl type="email" placeholder="Email" value={this.state.user} onChange={this.props.login.handleChange}/>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>
						Password
					</Col>
					<Col sm={10}>
						<FormControl type="password" placeholder="Password" value={this.props.login.state.password} onChange={this.props.login.handleChange}/>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col smOffset={1} sm={2}>
						<Button type="submit">Sign in</Button>
					</Col>
				</FormGroup>
			</Form>
		)
	}

	displayPanel() {
		return (
			<Panel>
					<Panel.Heading>
							<Panel.Title componentClass="h3">Login</Panel.Title>
					</Panel.Heading>
					<Panel.Body>
						{this.displayForm()}
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

export default Login;