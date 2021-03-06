import React, {Component} from 'react';
import {Button, Form, Col, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import '../styles/App.css';

class Login extends Component {
	

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>
				</form>
		);
	}
}

export default Login;