import { useState, useEffect }    from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios                      from 'axios';

import View from './BookDetailsView';

function BookDetails() {
  const [book, setBook] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log('Error from BookDetails');
      });
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        navigate('/books');
      })
      .catch((err) => {
        console.log('Error form BookDetails_handleDelete');
      });
  };

  return (
    <View
      model    = { book }
      onDelete = { handleDelete }
    />
  );
}

export default BookDetails;
