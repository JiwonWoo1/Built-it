import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { useAuth0 } from '@auth0/auth0-react'



function AddNewItemButton() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return isAuthenticated ? (
        <div>
            <div>
            <Button variant="white" style={{color: "#282c34", fontSize: 18, marginTop: '15px', cursor: 'pointer'}}> Add a new item</Button>
            </div>
        </div>
    ) : "not a user"
}

export default AddNewItemButton
