import React, {Component} from 'react';
import Login from './Login';
import { Panel } from 'react-bootstrap';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false,
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
this.setState({isAuthenticated: true});
	}



	render() {
		return this.state.isAuthenticated
? (
		<Panel className="App-container">
			<Panel.Heading>
				<Panel.Title componentClass="h3">Welcome</Panel.Title>
			</Panel.Heading>
			<Panel.Body>Panel content</Panel.Body>
		</Panel>
	)
			: (
				<div className="App-container">
				 <Panel>
					<Panel.Heading>
							<Panel.Title componentClass="h3">Longin</Panel.Title>
					</Panel.Heading>
					<Panel.Body>
						<Login data={this} />
					</Panel.Body>
			</Panel>
				</div>
				

			)

	}
}

export default Home;