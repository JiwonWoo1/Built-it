import React from 'react'
import CountryStateCity from '../country/CountryStateCity'
import { Auth0Provider } from '@auth0/auth0-react';
import UserProfile from './UserProfile';
import { Container } from 'react-bootstrap'
import ItemShowCase from '../product/ItemShowCase';

const Home = () => {
  return (
    <Container>
        <CountryStateCity />
        <ItemShowCase />
        <UserProfile />
    </Container>
  )
}

export default Home