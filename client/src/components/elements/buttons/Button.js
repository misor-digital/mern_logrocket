const Button = (props) => {
  const {
    title,
    className,
    handleClick
  } = props;

  return (
    <button
      type      = 'button'
      className = { `btn ${className}` }
      onClick   = { handleClick }
    >
      { title }
    </button>
  );
};

export default Button;
