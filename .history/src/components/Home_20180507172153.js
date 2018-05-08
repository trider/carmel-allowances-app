import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navigation from '../components/Navigation';
import Login from '../components/Login';
import * as config from '../data/config';
import * as actions from '../actions';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			authenticated: true,
			isEnglish: true
		};

		this.handleChange = this
			.handleChange
			.bind(this);
		this.handleSubmit = this
			.handleSubmit
			.bind(this);
		this.setLanguage = this
			.setLanguage
			.bind(this);
		this.handleLogout = this
			.handleLogout
			.bind(this);
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