import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Landing from './pages/Landing';
import CountryDetail from './pages/CountryDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" component={Landing} exact/>
      <Route path="/:country" component={CountryDetail} />
    </div>
    </Router>
  );
}

export default App;
