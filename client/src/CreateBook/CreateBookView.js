import { ButtonLink } from '../components/elements/buttons'
import { BookForm } from '../components/forms'

const CreateBookView = (props) => {
  const {
    model,
    onChange,
    onSubmit
  } = props;

  return (
    <div className='main-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <ButtonLink
              path      = '/books'
              className = 'btn-outline-warning float-left'
              title     = 'Show Book List'
            />
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Book</h1>
            <p className='lead text-center'>Create new book</p>

            <BookForm
              hasLabel      = { false }
              hasDatePicker = { true }
              model         = { model }
              onChange      = { onChange}
              onSubmit      = { onSubmit }
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBookView;
