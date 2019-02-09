import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './components/layout/Search';
import Events from './components/pages/Events';
import Event from './components/pages/Event';
import EventForm from './components/pages/EventForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="app-container">
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path="/" component={Events} />
            <Route exact path="/events/:id" component={Event} />
            <Route exact path="/addevent" component={EventForm} />
          </Switch>
          <div className="footer">
            Footer
          </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
