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
			<Form horizontal onSubmit={this.props.login.handleSubmit} style={{padding:50}}	>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							Email
    </Col>
						<Col sm={5}>
							<FormControl name="email" type="email" placeholder="Email" value={this.state.user} onChange={this.props.login.handleChange}/>
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={2}>
							Password
    </Col>
						<Col sm={5}>
							<FormControl name="pw" type="password" placeholder="Password" value={this.state.password} onChange={this.props.login.handleChange}/>
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