import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from './containers/nav/nav';
import Home from './containers/home/home';
import Work from './containers/work/work';
import About from './containers/about/about';
import Contact from './containers/contact/contact';
import Footer from './containers/footer/footer';

import We1 from './containers/work/workItems/we1';

import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <Nav />

          <Switch>
            <Route path='/' exact component={ Home }/>
            <Route path='/work' exact component={ Work }/>
              <Route path='/work/we1' exact component={ We1 }/>
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
