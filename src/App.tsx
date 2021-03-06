import React from 'react';
import NavBar from './components/navBar/NavBar'
import { BrowserRouter as Router,Switch , Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import Footer from '../src/components/pages/footer/Footer'

function App() {
  return (
    <Router>
<NavBar />
<Switch>
  <Route path='/' exact component={HomePage} />
</Switch>
<Footer />
    </Router>
  );
}

export default App;