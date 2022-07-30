import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { getFirestore, query } from "firebase/firestore";
import { collection, getDocs, where } from "firebase/firestore";

import { Container, Row, Col, Image, Card } from 'react-bootstrap'

const UserProfile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const db = getFirestore()

    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            const q = query(collection(db, "items"), where("user", "==", user.name));
            var items = []
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setItems(items)
            console.log(user);
        }
        fetchData()
    }, [user, db])

    if (isLoading) {
        return <div>Loading</div>
    } else {
        return (
            isAuthenticated && (
                <Container className='profile-container'>
                    <Row>
                        <Col md="auto">
                            <Image src={user.picture} />
                        </Col>
                        <Col>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row xs={1} md={2} className="g-4">
                        {items
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
            )
        )
    }
}

export default UserProfile