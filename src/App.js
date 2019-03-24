import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';

import About from './components/About';

import Contact from './components/Contact';

import Error from './components/Error';

import product from './components/product';

import pricing from './components/pricing';

import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      
      <BrowserRouter> 
<div>
<Navigation />
<Switch>
<Route path="/" component={Home} exact />

<Route path="/about" exact  component={About} />

<Route path="/product" exact  component={product} />

<Route path="/pricing" exact  component={pricing} />

<Route path="/contact"  exact component={Contact} />

<Route component={Error} />
</Switch>
</div>
      </BrowserRouter> 
    );
  }
}

export default App;
