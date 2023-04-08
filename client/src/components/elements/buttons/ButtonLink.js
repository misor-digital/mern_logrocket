import { Link } from 'react-router-dom';

const ButtonLink = (props) => {
  const {
    path,
    title,
    className
  } = props;

  return (
    <Link
      to        = { path }
      className = { `btn ${className}` }
    >
      { title }
    </Link>
  );
};

export default ButtonLink;
