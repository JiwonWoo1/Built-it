import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


export const AddItemPage = (props) => {
    const db = getFirestore(props.firestoreApp)

    const [formData, setFormData] = useState({
        image: '',
        description: '',
        used_items: '',
        price: '',
        state: '',
        city: ''
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("clicked submit");
        try {
            const docRef = await addDoc(collection(db, "items"), formData);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return <Container className="add-item-container">
        <h1>Add a new Item</h1>
        <Form onSubmit={handleSubmit}>
            
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Add an image</Form.Label>
                <Form.Control onChange={(e) => setFormData({...formData, image: e.target.value})} type="file" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Creation description</Form.Label>
                <Form.Control onChange={(e) => setFormData({...formData, description: e.target.value})} type="text" placeholder="Enter description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUsedItems">
                <Form.Label>Used Items</Form.Label>
                <Form.Control onChange={(e) => setFormData({...formData, used_items: e.target.value})} type="text" placeholder="What materials you used while building this item" />
                <Form.Text className="text-muted">
                    This'll other people building this item
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={(e) => setFormData({...formData, price: e.target.value})} type="text" placeholder="Enter price in dollars" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control onChange={(e) => setFormData({...formData, state: e.target.value})} type="text" placeholder="Which state you live in?" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={(e) => setFormData({...formData, city: e.target.value})} type="text" placeholder="Which city you live in?" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>

}
