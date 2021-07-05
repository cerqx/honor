import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Produtos from './components/Produtos';
import Cart from './components/Cart';

function App() {
  return (
    <>
      
      <Router>
        <Header/>
          <Switch>
            <Route path='/' component= {Content} exact/>
            <Route path='/products' component={Produtos}/>
            <Route path='/cart' component={Cart}/>
          </Switch>

          
      </Router>

      

      
    </>
  );
}

export default App;
