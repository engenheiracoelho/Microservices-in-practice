import './App.css';
import React, { Fragment } from 'react'
import BookList from './book-list-jesus/BookListJesus';
import BookCreate from './book-create/BookCreate';

function App() {
  return (
    
    <Fragment>
      <BookCreate/>
      <BookList/>
    </Fragment>
  );
}

export default App;
