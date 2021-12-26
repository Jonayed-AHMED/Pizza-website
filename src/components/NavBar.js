import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Container>
					<Navbar.Brand>
						<Image src="images/logo.png" alt="logo" style={{ height: 50 }} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<LinkContainer to="">
								<Nav.Link href="#login">Login</Nav.Link>
							</LinkContainer>
							<LinkContainer to="">
								<Nav.Link href="#cart">Cart</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
