import React, {Component} from 'react';
import {Button, Col, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import Home from '../containers/Home';

// import '../styles/App.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			password: '',
			authenticated: false
		};

	}

	login(txt) {
		return (

			<Form
				horizontal
				onSubmit={this.props.login.handleSubmit}
				style={{
				padding: 50
			}}>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Email
					</Col>
					<Col sm={5}>
						<FormControl
							name="email"
							type="email"
							placeholder="Email"
							value={this.state.user}
							onChange={this.props.login.handleChange}/>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>
						Password
					</Col>
					<Col sm={5}>
						<FormControl
							name="pw"
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.props.login.handleChange}/>
					</Col>
				</FormGroup>

				<FormGroup>
					<Col smOffset={1} sm={2} style={{
						paddingLeft: 110
					}}>
						<Button type="submit">Sign in</Button>
					</Col>
				</FormGroup>
			</Form>
		)
	}

	render() {
		const txt = "Minimal Viable Development Services (MVDS)"
		return this.login(txt)
	}
}

export default Login;