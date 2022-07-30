import React from 'react'
import CountryStateCity from '../country/CountryStateCity'
import { Auth0Provider } from '@auth0/auth0-react';
import UserProfile from './UserProfile';
import { Container } from 'react-bootstrap'
const Home = () => {
  return (
    <Container>
        <CountryStateCity />
        <UserProfile />
        <h1>
            hello
        </h1>
    </Container>
  )
}

export default Home