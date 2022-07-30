import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Filter = () => {
  const [query, setQuery] = useState("")

  return (
    <Container>
     <Form className="d-flex mt-3">
         <Form.Control
           type="search"
           placeholder="Search For an Item!"
           className="me-2"
           size='lg'
           aria-label="Search"
           varient="outline-success"
           onChange={(e) => setQuery(e.target.value)}
         />
         <Button href={"/search/"+ query} variant="success" type="submit">Search</Button>
     </Form>
    </Container>
  )
}

export default Filter