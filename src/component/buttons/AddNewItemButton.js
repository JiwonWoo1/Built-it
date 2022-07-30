import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { useAuth0 } from '@auth0/auth0-react'
import Home from '../pages/Home';
import { AddItemPage } from '../pages/AddItemPage';



function AddNewItemButton() {
    const [show, setShow] = useState(false);
    const { user, isAuthenticated, isLoading } = useAuth0();

    return isAuthenticated ? (
        <div>
            <div>
            <Button
                variant="success"
                onClick={AddItemPage}> Add a new item</Button>
            </div>
        </div>
    ) : "not a user"
}

export default AddNewItemButton