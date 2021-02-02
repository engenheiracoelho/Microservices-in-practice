import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react'
import BookList from './book-list-jesus/BookListJesus';

function App() {
  return (
    
    <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
      <BookList>

      </BookList>
      
    </Fragment>
  );
}

export default App;
