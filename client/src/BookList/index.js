import React, { useState, useEffect } from 'react';
import axios from 'axios';

import View from './BookListView';

function BookList() {
  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from BookList');
      });
  }, []);

  return (
    <View model = { books } />
  );
}

export default BookList;
