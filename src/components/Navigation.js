import React, {Component} from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';

class Navigation extends Component {

	displayNavbar() {
		return (
			<Navbar>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} onClick={this.props.login.handleLogout}>Logout</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)

	}

	render() {
		return this.displayNavbar()
	}
}

export default Navigation;