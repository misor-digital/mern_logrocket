import { ButtonLink } from "../components/elements/buttons";

const BookCard = (props) => {
  const { model } = props;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <ButtonLink
            path  = { `/books/${model._id}` }
            title = { model.title }
          />
        </h2>
        <h3>{model.author}</h3>
        <p>{model.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
