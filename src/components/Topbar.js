import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MdLocalOffer } from 'react-icons/md';

const Topbar = () => {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home" className="d-flex">
						<MdLocalOffer className="text-warning" />
						<h6 className="ms-1">Milano-Express</h6>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<LinkContainer to="/" activeClassName>
								<Nav.Link href="#home">Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/about" activeClassName>
								<Nav.Link href="#about">About Us</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/contact" activeClassName>
								<Nav.Link href="#contact">Contact Us</Nav.Link>
							</LinkContainer>

							{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Topbar;
