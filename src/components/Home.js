import React, { Component } from 'react';
import {  Panel } from 'react-bootstrap';

import { FirebaseAuth } from 'react-firebaseui';
import firebaseUI from 'firebase';
import * as firebase from 'firebase';
import * as config from '../data/config';

import '../styles/index.css';
import Report from './Report';
import Navigation from './Navigation';

const firebaseApp = firebase.initializeApp(config.firebaseConfig);


class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false,
			user: 'admin@app.com',
			password: '12345'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	};

	uiConfig = {

			signInFlow: 'popup',
			signInSuccessUrl: '/',
			signInOptions: [
				{
					provider: firebaseUI.auth.PhoneAuthProvider.PROVIDER_ID,
					defaultCountry: 'IL'
				},
				{
					provider: firebaseUI.auth.EmailAuthProvider.PROVIDER_ID,
					defaultCountry: 'IL'
				},
				{
					provider: firebaseUI.auth.GoogleAuthProvider.PROVIDER_ID,
					defaultCountry: 'IL'
				}
			],
			callbacks: {
				signInSuccess: (currentUser, credential, redirectUrl) => {

					this.setState({isAuthenticated: true});

					return false; // Avoid redirects after sign-in.
				}
			}
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
		if (this.state.user === 'admin@app.com' && this.state.password === '12345') {
			this.setState({isAuthenticated: true});	
		}
		else {
			 alert('Try again')
				this.setState({isAuthenticated: false});	
		}
		
	}

handleLogout(event) {
	event.preventDefault();
	firebaseApp.auth().signOut().then(function () {
   alert("Logged out")
	}).catch(function (error) {
			console.log(error)
		});
	this.setState({isAuthenticated: false});

}

	
displayPanel() {
	return (
		<Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">Login</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
			 	<FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebaseUI.auth()}/>
			</Panel.Body>
		</Panel>
	)
}
	

	render() {
		return this.state.isAuthenticated ? (
			<div>
				<Navigation login={this}  />
				<Report login={this} firebaseApp={firebaseApp} />
			</div>
			
		) : (<div className="App-container">{this.displayPanel()}</div>	
				
			
			)
	}
}

export default Home;