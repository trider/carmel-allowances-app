import React, {Component} from 'react';
import Login from './Login';
import { Panel } from 'react-bootstrap';

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
		return this.state.isAuthenticated
			? (<div></div>)
			: (
				<Panel>
    <Panel.Heading>
      <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>

			)

	}
}

export default Home;