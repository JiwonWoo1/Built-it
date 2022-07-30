import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { Container, Row, Col, Image } from 'react-bootstrap'

const UserProfile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading) {
        return <div>Loading</div>
    } else if (isAuthenticated) {
        console.log(user);
    }

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
                
            </Container>
        )
    )
}

export default UserProfile