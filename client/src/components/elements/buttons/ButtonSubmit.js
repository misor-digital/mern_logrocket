const ButtonSubmit = (props) => {
  let {
    className,
    title = 'Submit',
  } = props;

  return (
    <button
      type      = 'submit'
      className = { `btn btn-outline-warning btn-block mt-4 ${className}` }
    >
      { title }
    </button>
  );
};

export default ButtonSubmit;
