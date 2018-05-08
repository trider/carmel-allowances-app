import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
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
				<Welcome name={'Welcome'}/> {this.displayName()}
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" name={this.state.name}
							value={this.state.name} onChange={this.handleChange} />
					</label>
					<input type="submit" name="Submit"/>
				</form>
				 
			</div>

		)
	}

	render() {
		return (
			<ListGroup>
					<ListGroupItem>Item 1</ListGroupItem>
					<ListGroupItem>Item 2</ListGroupItem>
					<ListGroupItem>...</ListGroupItem>
</ListGroup>
		)

		// return this.state.displayTerms ? (
		// 	<div className="App">
		// 		{this.displayTerms()}
		// 		<br/>
		// 		<Button bsStyle="primary" bsSize="large" onClick={this.handleBack}>Back</Button>
		// 	</div>) :
		// 		(<div className="App">
		// 		{this.displayForm()}
		// 		</div>
		// 	)
	}
}

export default Home;
