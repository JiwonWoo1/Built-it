import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import AddModal from '../Modal/AddModal';



function AddNewItemButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button
                variant="outline-secondary"
                onClick={handleShow}>Add a new item</Button>

            <AddModal show={show} handleClose={handleClose} />
        </div>
    )
}

export default AddNewItemButton