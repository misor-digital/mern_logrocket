import { FormGroupText, FormGroupDate } from '../elements/formGroups'
import { ButtonSubmit }                 from "../elements/buttons";

const BookForm = (props) => {
  const {
    hasLabel,
    hasDatePicker,
    model,
    onChange,
    onSubmit,
  } = props;

  let dateElement;

  !!hasDatePicker
    ? dateElement =
      <FormGroupDate
        placeholder = 'Published Date'
        name        = 'published_date'
        hasLabel    = { hasLabel }
        value       = { model.published_date }
        onChange    = { onChange }
      />
    : dateElement =
      <FormGroupText
        placeholder = 'Published Date'
        name        = 'published_date'
        hasLabel    = { hasLabel }
        value       = { model.published_date }
        onChange    = { onChange }
      />;

  return (
    <form
      noValidate
      onSubmit = { onSubmit }
    >

      <FormGroupText
        placeholder = 'Title of the Book'
        name        = 'title'
        hasLabel    = { hasLabel }
        value       = { model.title }
        onChange    = { onChange }
      />

      <FormGroupText
        placeholder = 'ISBN'
        name        = 'isbn'
        hasLabel    = { hasLabel }
        value       = { model.isbn }
        onChange    = { onChange }
      />

      <FormGroupText
        placeholder = 'Author'
        name        = 'author'
        hasLabel    = { hasLabel }
        value       = { model.author }
        onChange    = { onChange }
      />

      <FormGroupText
        placeholder = 'Describe this book'
        name        = 'description'
        hasLabel    = { hasLabel }
        value       = { model.description }
        onChange    = { onChange }
      />

      <FormGroupText
        placeholder = 'Publisher of this Book'
        name        = 'publisher'
        hasLabel    = { hasLabel }
        value       = { model.publisher }
        onChange    = { onChange }
      />

      { dateElement }

      <ButtonSubmit />
    </form>
  );
};

export default BookForm;
