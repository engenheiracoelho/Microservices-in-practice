import React, { Component } from 'react';
import './App.css';
import Home from './Test/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './Test/BookList';
import GroupEdit from './Test/BookEdit';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/book' exact={true} component={GroupList}/>
            <Route path='/book/:id' component={GroupEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;
