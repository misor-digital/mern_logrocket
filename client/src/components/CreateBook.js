import React, { useState }   from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios                 from axios;

const CreateBook = (props) => {
  // Define the state with useState hook
  const navigate          = useNavigate();
  const [ book, setBook ] = useState({
    title          : '',
    isbn           : '',
    author         : '',
    description    : '',
    published_date : '',
    publisher      : '',
  });

  const onChange = (e) => {
    setBook({ ...book, [e.target.name] : e.target.value });
  };

  const onSubmit = (e) => {};

  return null;
};