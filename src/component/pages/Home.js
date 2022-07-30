import React from 'react'
import CountryStateCity from '../country/CountryStateCity'
import { Auth0Provider } from '@auth0/auth0-react';
import UserProfile from './UserProfile';

const Home = () => {
  return (
    <UserProfile />
  )
}

export default Home