import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import Home from './component/pages/Home';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' element={ <Home />} />
          </Switch>
      </Router>
    </div>
    
  );
}

export default App;
