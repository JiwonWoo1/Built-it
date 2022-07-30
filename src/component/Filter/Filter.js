import { collection, getFirestore, where, query } from 'firebase/firestore'
import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { firebaseApp } from '../../App'

const Filter = () => {
    const db = getFirestore()

    const dbRef = collection(db, 'items');

    const q = query(dbRef, where("city", "==", "New York"))
    console.log(q);
  return (

    <Container>
     <Form className="d-flex mt-3">
         <Form.Control
           type="search"
           placeholder="Search"
           className="me-2"
           aria-label="Search"
         />
         <Button variant="outline-success">Search</Button>
     </Form>
    </Container>
  )
}

export default Filter