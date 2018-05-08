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
			<Form horizontal onSubmit={this.props.data.handleSubmit}>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Email
					</Col>
					<Col sm={10}>
						<FormControl type="email" placeholder="Email"/>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>
						Password
					</Col>
					<Col sm={10}>
						<FormControl type="password" placeholder="Password"/>
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

	render() {;
	}
}

export default Login;