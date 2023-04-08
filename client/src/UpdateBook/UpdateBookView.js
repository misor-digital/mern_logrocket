import { ButtonLink } from "../components/elements/buttons";
import { BookForm }   from '../components/forms'

const UpdateBookView = (props) => {
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
              path = '/books'
              className = 'btn-outline-warning float-left'
              title = 'Show Book List'
            />
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Book</h1>
            <p className='lead text-center'>Update Book's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>

        <BookForm
              hasLabel      = { true }
              model         = { model }
              onChange      = { onChange}
              onSubmit      = { onSubmit }
            />

        </div>
      </div>
    </div>
  );
}

export default UpdateBookView;
