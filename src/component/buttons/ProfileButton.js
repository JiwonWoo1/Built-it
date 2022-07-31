import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { useAuth0 } from '@auth0/auth0-react'



function ProfileButton() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return isAuthenticated ? (
        <div>
            <div>
            <p style={{color: "#0A3622", fontSize: 25, marginTop: '15px'}}>Welcome {user.name}!</p>
            </div>
        </div>
    ) : "not a user"
}

export default ProfileButton
