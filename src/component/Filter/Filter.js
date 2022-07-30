import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Filter = () => {
  const [query, setQuery] = useState("")

  return (
    <Container>
     <Form className="d-flex mt-3">
         <Form.Control
           type="search"
           placeholder="Search"
           className="me-2"
           aria-label="Search"
           onChange={(e) => setQuery(e.target.value)}
         />
         <Button href={"/search/"+ query} variant="outline-success" type="submit">Search</Button>
     </Form>
    </Container>
  )
}

export default Filter