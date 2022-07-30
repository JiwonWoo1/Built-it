import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Navigation from './component/Navigation';
import Home from './component/pages/Home';
import { AddItemPage } from './component/pages/AddItemPage';

import { Auth0Provider } from '@auth0/auth0-react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// CONFIG FILE GOES HERE

const firebaseApp = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation />
          <Switch>
          <Route exact path='/' element={ <Home />} />
          <Route path='/add_item'>
            <AddItemPage firebase={firebaseApp} />
          </Route>
          </Switch>
      </Router>
    </div>
    
  );
}

export default App;
