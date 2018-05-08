import React, {Component} from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';

class Navigation extends Component {
	

	navHeader(text, route) {
		return (
			<Navbar.Header>
					<Navbar.Brand>{text}</Navbar.Brand>
				<Navbar.Toggle/>
			</Navbar.Header>
		)

	}

	navLogout(route) {
		let txt = 'English'
		if (this.props.nav.props.appConfig.isEnglish) 
			txt = 'עברית'
		return (
			<Nav pullRight>
				<NavItem onClick={this.props.nav.setLanguage}>{txt}</NavItem>
				< NavItem onClick={this.props.nav.handleLogout}>
					<LinkContainer to={route}>
						<NavItem>Logout</NavItem>
					</LinkContainer>
				</NavItem>
			</Nav>
		)
	}

	navLink(route, text, isVisible) {
		if (isVisible) {
			return (
				<Nav>
					<LinkContainer to={route}>
						<NavItem>{text}</NavItem>
					</LinkContainer>
				</Nav>
			)
		}

	}

	displayNavLinks() {
		return (this.props.auth
			? (
				<Navbar.Collapse>
					{this.navLink("/booking", "booking", true)}
					{this.navLogout("/login")}
				</Navbar.Collapse>
			)
			: (
				<Navbar.Collapse></Navbar.Collapse >
			))
	}

	displayNav(txt) {
		return (
			<Router>
				<div>
					<Navbar fluid collapseOnSelect>
						{this.navHeader(txt, '/')}
						{this.displayNavLinks()}
					</Navbar>
					<Route exact path="/" render={(props) => <Redirect to="/welcome"/>}/>
					<Route exact path="/login" render={(props) => <Redirect to="/welcome"/>}/>
					<Route
						exact
						path="/booking"
						render={(props) => <Booking nav={this.props.nav}/>}/>
					<Route
						exact
						path="/welcome"
						render={(props) => <Welcome nav={this.props.nav}/>}/> {/* <Route
					exact
					path="/logout"
					render={(props) => <Redirect to="/login" />}
				/>	 */}
				</div>
			</Router>
		)
	}

	render() {
		const txt = "Minimal Viable Development Services (MVDS)"
		return this.displayNav(txt)
	}
}

export default Navigation;