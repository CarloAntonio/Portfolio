import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from './containers/nav/nav';
import Home from './containers/home/home';

import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <Nav />

        <Home/>

      </div>
    );
  }
}

export default App;
