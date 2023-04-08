import { ButtonLink } from '../components/elements/buttons';

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
            <ButtonLink
              path      = '/'
              className = 'btn-outline-warning float-left'
              title     = 'Home'
            />
            <ButtonLink
              path      = '/books/create'
              className = 'btn-outline-warning float-right'
              title     = '+ Add New Book'
            />
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
