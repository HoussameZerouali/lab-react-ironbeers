import React from 'react';

import Home from './components/Home';
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer';
import CreateBeer from './components/CreateBeer';
import OneBeer from './components/OneBeer';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={Beers}/>
        <Route exact path='/random-beer' component={RandomBeer}/>
        <Route exact path='/new-beer' component={CreateBeer}/>
        <Route exact path={`/beer/:id`} component={OneBeer}/>
      </Switch>
     


    </div>
  );
}

export default App;
