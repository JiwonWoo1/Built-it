import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
import Register from './component/pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation />
            <Route exact path='/' element={ <Home />} />
            <Route path='/login' component={<Login />} />
            <Route path='/register' component={<Register />} />
      </Router>
    </div>
  );
}

export default App;
