import FormGroup from './FormGroup';

const FormGroupDate = (props) => {  
  const {
    placeholder,
    name,
    value,
    onChange,
  } = props;

  return (
    <FormGroup
      isDate = { true }
      placeholder = { placeholder}
      name        = { name}
      value       = { value}
      onChange    = { onChange}
    />
  );
};

export default FormGroupDate;
