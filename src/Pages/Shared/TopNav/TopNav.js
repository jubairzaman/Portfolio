import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand className="text-white" href="/home">Jubair Zaman</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link style={{ textDecoration: 'none' }} className="text-white mx-2" to="/home">Home</Link>
                        <Link style={{ textDecoration: 'none' }} className="text-white mx-2" to="/projects">Projects</Link>
                        <Link style={{ textDecoration: 'none' }} className="text-white mx-2" to="/services">Services</Link>
                        <Link style={{ textDecoration: 'none' }} className="text-white mx-2" to="/contact">Contact</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;