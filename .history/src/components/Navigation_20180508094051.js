import React, {Component} from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';

class Navigation extends Component {

	displayNavbar() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#brand"></a>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="#">
							Link
						</NavItem>
						<NavItem eventKey={2} href="#">
							Link
						</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1} href="#">
							Link Right
						</NavItem>
						<NavItem eventKey={2} href="#">
							Link Right
						</NavItem>
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