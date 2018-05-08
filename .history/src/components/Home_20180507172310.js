import React, {Component} from 'react';
import Login from './Login';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			authenticated: true,
			user: '',
			password:''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};



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



	render() {
		return this.props.appConfig.isAuthenticated
			? (<Navigation nav={this} auth={this.props.appConfig.isAuthenticated}/>)
			: (<Login config={this.props.config} login={this}/>)

	}
}

export default Home;