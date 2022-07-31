import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { useAuth0 } from '@auth0/auth0-react'



function ProfileButton() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return isAuthenticated ? (
        <div>
            <div>
            <Button variant='success'
            size='sm' style={{color: "white", fontSize: 25, marginTop: '10px'}}>Welcome {user.name}!</Button>
            </div>
        </div>
    ) : "not a user"
}

export default ProfileButton
