import React, {Component} from 'react';
import Login from './Login';
import Allowances from './Allowances';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false,
			user: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	};

	handleChange(event) {
		if (event.target.name === 'user') {
			this.setState({user: event.target.value});
		} else {
			this.setState({password: event.target.value});
		}
	}

	handleLogin(event) {
		event.preventDefault();
		this.setState({isAuthenticated: true});
	}

	handleLogout(event) {
		event.preventDefault();
		this.setState({isAuthenticated: false});
	}

	render() {
		return this.state.isAuthenticated ? ((<Login login={this}/>)
			: (<Login login={this}/>)

	}
}

export default Home;