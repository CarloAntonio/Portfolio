import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import async from "./utils/async";

import Nav from './containers/nav/nav';
import Home from './containers/home/home';
import Work from './containers/work/work';
import About from './containers/about/about';
import Contact from './containers/contact/contact';
import Footer from './containers/footer/footer';

import './App.css';

// Lazy Loading
const asyncWe1 = async(() => {
  return import('./containers/work/workItems/we1');
});

const asyncWe2 = async(() => {
  return import('./containers/work/workItems/we2');
});

const asyncWe3 = async(() => {
  return import('./containers/work/workItems/we3');
});

const asyncWe4 = async(() => {
  return import('./containers/work/workItems/we4');
});

const asyncWe5 = async(() => {
  return import('./containers/work/workItems/we5');
});

class App extends Component {
  render() {

    return (
      <div>
        <Nav />

          <Switch>
            <Route path='/' exact component={ Home }/>
            <Route path='/work' exact component={ Work }/>
              <Route path='/work/we1' exact component={ asyncWe1 }/>
              <Route path='/work/we2' exact component={ asyncWe2 }/>
              <Route path='/work/we3' exact component={ asyncWe3 }/>
              <Route path='/work/we4' exact component={ asyncWe4 }/>
              <Route path='/work/we5' exact component={ asyncWe5 }/>
            <Route path='/about' exact component={ About }/>
            <Route path='/contact' exact component={ Contact }/>
            <Redirect to="/"/>
          </Switch>

        <Footer/>
      </div>
    );
  }
}

export default App;
