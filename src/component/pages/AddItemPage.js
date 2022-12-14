import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { firebaseApp } from '../../App'
import '../../styles/addItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmationModal = (props) => {
    return <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Item Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your item was successfully added, you can add a new item or return back to your profile!</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                Close
            </Button>
            <Button variant="success" onClick={props.handleReturn}>
                Return
            </Button>
        </Modal.Footer>
    </Modal>
}


export const AddItemPage = (props) => {
    const storage = getStorage(firebaseApp);
    const db = getFirestore(props.firestoreApp)

    const [image, setImage] = useState(null);
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [formData, setFormData] = useState({
        user: '',
        image: '',
        name: '',
        description: '',
        used_items: '',
        price: '',
        state: '',
        city: '',
        phone_number: '',
    })

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false)
        window.location.reload(false)
    }
    
    const handleReturn = () => {
        setShowModal(false)
        window.location.href='/'
    }
    const handleShow = () => setShowModal(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (image != "" && image != null) {
                const imageRef = ref(storage, `images/${image.name}`);
                uploadBytes(imageRef, image).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then(async(url) => {
                        const docRef = await addDoc(collection(db, "items"), {...formData, image: url});                       
                        console.log("Document written with ID: ", docRef.id);
                        handleShow();
                    })
                });
            } else {
                const docRef = await addDoc(collection(db, "items"), formData);
                console.log("Document written with ID: ", docRef.id);
                handleShow();
            }
            
            setFormData({user: user.name})
    
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            setFormData(prev => ({ ...prev, user: user.name }))
        }
    }, [user])


    return (
        <Container className="add-item-container">

            <ConfirmationModal show={showModal} handleClose={handleClose} handleReturn={handleReturn} />
            <h1 style={{color: '#0a3622'}}>Add a new Item</h1>
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Add an image</Form.Label>
                    
                    <Form.Control onChange={(e) => {
                        setImage(e.target.files[0]);
                    }} type="file" multiple />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Builtit Name</Form.Label>
                    <Form.Control onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Creation description</Form.Label>
                    <Form.Control onChange={(e) => setFormData({ ...formData, description: e.target.value })} type="text" placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUsedItems">
                    <Form.Label>Used Items</Form.Label>
                    <Form.Control onChange={(e) => setFormData({ ...formData, used_items: e.target.value })} type="text" placeholder="What materials you used while building this item" />
                    <Form.Text className="text-muted">
                        This'll help other people building this item
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={(e) => setFormData({ ...formData, price: e.target.value })} type="text" placeholder="Enter price in dollars" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Control onChange={(e) => setFormData({ ...formData, state: e.target.value })} type="text" placeholder="Which state you live in?" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={(e) => setFormData({ ...formData, city: e.target.value })} type="text" placeholder="Which city you live in?" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} type="text" placeholder="Which city you live in?" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
