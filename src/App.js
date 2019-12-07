import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './shop';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" component={Shop}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

const Home = () => (
  <div>
    <h1> Home Page </h1>
  </div>
);


export default App;
