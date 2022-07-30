import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Navigation from './component/Navigation';
import Home from './component/pages/Home';
import { AddItemPage } from './component/pages/AddItemPage';

import { Auth0Provider } from '@auth0/auth0-react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// CONFIG FILE GOES HERE
const firebaseConfig = {
  apiKey: "AIzaSyC1iK37p4E_r3pSavtwjvZ-B7z1C5s-1YI",
  authDomain: "builtit-a3c6f.firebaseapp.com",
  projectId: "builtit-a3c6f",
  storageBucket: "builtit-a3c6f.appspot.com",
  messagingSenderId: "854821822509",
  appId: "1:854821822509:web:a60510a26b1346b88758a4"
};
const firebaseApp = initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <Router>
          <Navigation />
          <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/add_item'>
            <AddItemPage firebase={firebaseApp} />
          </Route>
          </Switch>
      </Router>   
    </div> 
  );
}

export default App;
