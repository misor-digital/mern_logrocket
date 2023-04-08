import { Link } from 'react-router-dom';

import BookItem from './BookItemView';

const BookDetailsView = (props) => {
  const {
    model,
    onDelete
  } = props;

  return (
    <div className='main-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/books' className='btn btn-outline-warning float-left'>
              Show Book List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Book's Record</h1>
            <p className='lead text-center'>View Book's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>
            <BookItem model = { model } />
          </div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDelete(model._id);
              }}
            >
              Delete Book
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/books/${model._id}/edit`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsView;
