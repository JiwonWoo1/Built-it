import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'react-bootstrap'

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated  } = useAuth0();
    return (
      <Button 
      color='success'
      variant="success"
      onClick={() => loginWithRedirect()}>Log in</Button>
    )
}

export default LoginButton
