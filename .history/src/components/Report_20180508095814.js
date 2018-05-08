import React, {Component} from 'react';
import {  Panel,Button,Form,Col,FormGroup,FormControl,ControlLabel } from 'react-bootstrap';

class Report extends Component {

	constructor(props) {
		super(props);
		this.state = {
			report: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handleChange(event) {
		if (event.target.name === 'user') {
			this.setState({user: event.target.value});
		} else {
			this.setState({password: event.target.value});
		}
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	handlePrev(event) {
		event.preventDefault();
		this.setState({isAuthenticated: false});
	}
	handleNext(event) {
		event.preventDefault();
		this.setState({isAuthenticated: false});
	}

	displayForm() {
		return (
			<Form horizontal onSubmit={this.props.login.handleLogin}>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Email
					</Col>
					<Col sm={10}>
						<FormControl type="email" placeholder="Email" value={this.props.login.state.user} onChange={this.props.login.handleChange}/>
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
					<Panel.Title componentClass="h3">Reports</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					<p>Items: {this.state.report.length}</p>
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

export default Report;