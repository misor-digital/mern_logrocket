import { useState }    from 'react';
import { useNavigate } from 'react-router-dom';
import axios           from 'axios';

import Model from '../models/Book';
import View  from './CreateBookView';

const CreateBook = () => {
  // Define the state with useState hook
  const navigate          = useNavigate();
  const [ book, setBook ] = useState(Model);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name] : e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/books', book)
      .then(res => {
        console.log(res);
        setBook(Model);

        navigate('/books');
      })
      .catch(err => {
        console.error('Error in CreateBook', err);
      });
  };

  return (
    <View
      model    = { book }
      onChange = { handleChange }
      onSubmit = { handleSubmit }
    />
  );
};

export default CreateBook;
