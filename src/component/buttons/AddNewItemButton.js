import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { useAuth0 } from '@auth0/auth0-react'
import Home from '../pages/Home';



function AddNewItemButton() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return isAuthenticated ? (
        <div>
            <div>
            <Button variant="white"> Add a new item</Button>
            </div>
        </div>
    ) : "not a user"
}

export default AddNewItemButton
