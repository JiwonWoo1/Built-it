import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './buttons/LoginButton';
import LogoutButton from './buttons/LogoutButton';
import AddNewItemButton from './buttons/AddNewItemButton';
import '../styles/navbar.css';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="me-auto" href="#home">
            <h2>BuiltIt</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#"><AddNewItemButton /></Nav.Link>
            <Nav.Link href="#deets"><LoginButton /></Nav.Link>
            <Nav.Link href="#deets"><LogoutButton /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation