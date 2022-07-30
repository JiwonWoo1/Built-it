import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const ItemShowCase = (props) => {
  const db = getFirestore(props.firestoreApp)
  const [showcaseItems, setShowcaseItems] = useState([])


  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "items"));
      querySnapshot.forEach((doc) => {
      setShowcaseItems(prev => ([...prev, doc.data()]))
    })}
    fetchData()
  }, [])

  return (
    <Container className="item-showcase-container">
      <Row xs={1} md={2} className="g-4">
        {showcaseItems.length >= 4 && Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>{showcaseItems[idx].name}</Card.Title>
                <Card.Text>
                  {showcaseItems[idx].description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                {showcaseItems[idx].price}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemShowCase