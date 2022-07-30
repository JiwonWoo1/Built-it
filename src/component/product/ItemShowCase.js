import React, {useEffect, useState} from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

import { getFirestore, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

import ProductCard from './ProductCardAndModal'

const ItemShowCase = (props) => {
  const db = getFirestore()
  const [showcaseItems, setShowcaseItems] = useState([])


  useEffect(() => {
    async function fetchData() {
      var items = []
      const querySnapshot = await getDocs(collection(db, "items"))
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setShowcaseItems(items)
    }
    fetchData()
  }, [db])

  return (
    <Container className="item-showcase-container">
      <Row xs={1} md={4} className="g-4" >
        {showcaseItems.length >= 4 && Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx} >
            <ProductCard style={{}}
              image={showcaseItems[idx].image}
              name={showcaseItems[idx].name}
              description={showcaseItems[idx].description}
              price={showcaseItems[idx].price}
              />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemShowCase