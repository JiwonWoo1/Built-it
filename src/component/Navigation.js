import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './buttons/LoginButton';
import LogoutButton from './buttons/LogoutButton';
import AddNewItemButton from './buttons/AddNewItemButton';
import '../styles/navbar.css';
import { useAuth0 } from '@auth0/auth0-react'
import logo from './Images/logo.jpg'
import logo1 from './Images/logo1.png'
const Navigation = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Brand className="me-auto" href="/">
            <img src={logo1} />
          <h2>BuiltIt</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          {/* <Nav className='justify-content-center'>
          <img src={logo} /> */}

          <Nav>
            <Nav.Link href="/add_item"><AddNewItemButton /></Nav.Link>
            {
              isAuthenticated ?
                <LogoutButton /> : <LoginButton />
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation