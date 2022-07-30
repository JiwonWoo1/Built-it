import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './buttons/LoginButton';
import LogoutButton from './buttons/LogoutButton';
import AddNewItemButton from './buttons/AddNewItemButton';
import { useAuth0 } from '@auth0/auth0-react'
import logo from './Images/logo.jpg'
import logo1 from './Images/logo1.png'
import ProfileButton from './buttons/ProfileButton';
const Navigation = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
      <Container>
        <Navbar.Brand className="m-auto" href="/">
            <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className='m-auto'>
          </Nav>
          <Nav className=''>
            <Nav.Link href="/user"><ProfileButton /></Nav.Link>
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
