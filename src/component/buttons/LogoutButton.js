import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'react-bootstrap'

const LogoutButton = () => {
    const { logout } = useAuth0();
  return (
    // <Button style={{width: '100px'}}
    // variant="white"
    // onClick={() => logout( { returnTo: window.location.origin })}>Log out</Button>
    // <button onClick={() => logout( { returnTo: window.location.origin })}>Log out</button>
    <p style={{color: "#0A3622", fontSize: 18, marginTop: '31px', cursor: 'pointer'}} 
    onClick={() => logout( { returnTo: window.location.origin })}>Log Out</p>
  )
}

export default LogoutButton