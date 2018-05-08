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

	componentDidMount() {
		this
			.props
			.setLanguage(true)
		this
			.props
			.configApp(config.formData)
		this
			.props
			.setPresentation(config.presentationData.english)
		this
			.props
			.authenticate(false)
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
		this
			.props
			.authenticate(true)
	}

	setLanguage(event) {
		event.preventDefault();
		this.props.setLanguage(!this.props.appConfig.isEnglish)
	}

	handleLogout(event) {
		event.preventDefault();
		this
			.props
			.authenticate(false)
	}

	render() {
		return this.props.appConfig.isAuthenticated
			? (<Navigation nav={this} auth={this.props.appConfig.isAuthenticated}/>)
			: (<Login config={this.props.config} login={this}/>)

	}
}
const mapStateToProps = state => {
	return {appConfig: state.appConfig}
}

const mapDispatchToProps = dispatch => {

	return {
		configApp: (data) => {
			dispatch(actions.configApp(data))
		},
		setLanguage: (data) => {
			dispatch(actions.setLanguage(data))
		},
		setPresentation: (data) => {
			dispatch(actions.setPresentation(data))
		},
		authenticate: (data) => {
			dispatch(actions.authenticateUser(data))
		}
	}
}

export default Home);