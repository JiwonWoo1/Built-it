import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const AddForm = (props) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked submit");
    const form = event.currentTarget;
    console.log(form);
  }

  return <Form onSubmit={handleSubmit}>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Creation description</Form.Label>
      <Form.Control type="text" placeholder="Enter description" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Used Items</Form.Label>
      <Form.Control type="text" placeholder="Enter price in dollars" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Price</Form.Label>
      <Form.Control type="text" placeholder="Enter price in dollars" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>State</Form.Label>
      <Form.Control type="text" placeholder="Which state you live in?" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="Which city you live in?" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
}

const AddModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddForm />
      </Modal.Body>
    </Modal>
  )
}

export default AddModal