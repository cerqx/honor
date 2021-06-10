import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
            <Route path='/' exact component='Home'/>
        </Switch>
      </Router>

      <Content/>
    </>
  );
}

export default App;
