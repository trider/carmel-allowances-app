import React, { Component } from 'react';


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
	}

	handleChange(event) {
		this.setState({name: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
  this.displayTermsComponent(this.state.name)
	}

	

	render() {
		return this.state.displayTerms ? (
			<div className="App">
				{this.displayTerms()}
				<br/>
				<button onClick={this.handleBack}>Back</button>
			</div>) :
				(<div className="App">
				{this.displayForm()}
				</div>
			)
	}
}

export default Home;
