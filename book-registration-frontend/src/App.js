import React, { Component } from 'react';
import './App.css';
import Home from './Test/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './Test/BookList';
import BookEdit from './Test/BookEdit';
import BookNew from './Test/BookNew';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/book' exact={true} component={BookList}/>
            <Route path='/book/:id' component={BookEdit}/>
            <Route path='/book/new' component={BookNew}/>
          </Switch>
        </Router>
    )
  }
}

export default App;
