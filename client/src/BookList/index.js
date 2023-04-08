import { useState, useEffect } from 'react';
import axios                   from 'axios';

import Model from '../models/Book';
import View  from './BookListView';

function BookList() {
  const [ books, setBooks ] = useState([Model]);

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
    <View
      model = { books }
    />
  );
}

export default BookList;
