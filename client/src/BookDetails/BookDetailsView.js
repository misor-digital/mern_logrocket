import { Button, ButtonLink } from '../components/elements/buttons';

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
            <ButtonLink
              path      = '/books'
              className = 'btn-outline-warning float-left'
              title     = 'Show Book List'
            />
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
            <Button
              title       = 'Delete Book'
              className   = 'btn-outline-danger btn-lg btn-block'
              handleClick = {() => {
                onDelete(model._id);
              }}
            />
          </div>
          <div className='col-md-6 m-auto'>
            <ButtonLink
              path      = {`/books/${model._id}/edit`}
              className = 'btn-lg btn-outline-info btn-block'
              title     = 'Edit Book'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsView;
