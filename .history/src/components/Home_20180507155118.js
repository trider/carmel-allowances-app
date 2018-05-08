import React, { Component } from 'react';
import {	Button,HelpBlock,Panel,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import Terms from './Terms';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			isPopulated: false,
			displayTerms: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}

	handleChange(event) {
		this.setState({name: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
  this.displayTermsComponent(this.state.name)
	}

	handleBack(event) {
		this.setState({
			isPopulated: false,
			displayTerms: false,
			name:''
		})
	}

handleWeather(event) {
	this.setState({displayWeather: !this.state.displayWeather});
}

	displayTermsComponent(text) {
		if (text.length > 0) {
			this.setState({
				displayTerms: true,
				isPopulated : true,
			})
		} else {
			this.setState({
					displayTerms: false,
					isPopulated: false,
			})
		}
	}

	displayTerms() {
		return this.state.isPopulated
			? (<Terms name={this.state.name} />)
			: (
				<div></div>
			)
	}

	displayName() {
		return this.state.isPopulated
			? (
				<p className="App-intro"></p>
			)
			: (
				<p className="App-intro">Please type your name</p>
			)
	}


	displayForm() {

		return (
			<div>
				{/* <Welcome name={'Welcome'}/> {this.displayName()} */}
				<form onSubmit={this.handleSubmit}>
				  
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
						<Col smOffset={1} sm={2} style={{paddingLeft:110}}>
							<Button type="submit">Sign in</Button>
						</Col>
					</FormGroup>
					{/* <label>
						Name:
						<input type="text" name={this.state.name}
							value={this.state.name} onChange={this.handleChange} />
					</label>
					<input type="submit" name="Submit"/> */}
				</form>
				 
			</div>

		)
	}

	render() {
		return this.state.displayTerms ? (
			<Panel>
						<Panel.Heading>
								<Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
						</Panel.Heading>
						<Panel.Body>	{this.displayTerms()}</Panel.Body>
					<Button bsStyle="primary" bsSize="large" onClick={this.handleBack}>Back</Button>
				</Panel>) :
				(<div className="App">
				{this.displayForm()}
				</div>
			)
	}
}

export default Home;
