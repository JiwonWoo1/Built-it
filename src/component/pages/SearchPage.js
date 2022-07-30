import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";


const SearchPage = (props) => {
  const { id = "" } = useParams();
  const db = getFirestore()

  const [query, setQuery] = useState(id === "" ? null : id)
  const [docs, setDocs] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(e.target.firstChild.value)
  }

  useEffect(() => {
    async function fetchData() {
      var items = []
      const querySnapshot = await getDocs(collection(db, "items"))
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setDocs(items)
    }
    fetchData()
  }, [db])


  return (
    <Container>
      <Form className="d-flex mt-3" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
      <Container className="search-items-container">
        <Row xs={1} md={2} className="g-4">
          {docs
            .filter(item => item.used_items.includes(query))
            .map((item, idx) => {
              return <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description}
                      {item.used_items}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {item.price}
                  </Card.Footer>
                </Card>
              </Col>
            })}
        </Row>
      </Container>
    </Container>
  )
}

export default SearchPage;