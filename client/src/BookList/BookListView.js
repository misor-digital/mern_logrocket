import { Link } from 'react-router-dom';

import BookCard from './BookCardView';

const BookListView = (props) => {
  const { model } = props;
  const bookList  =
    model.length === 0
      ? 'There is no book record!'
      : model.map((book, k) =>
        <BookCard
          model = { book }
          key={k}
        />
      );

  return (
    <div className='main-container show-book-list'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/books/create'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
}

export default BookListView;
