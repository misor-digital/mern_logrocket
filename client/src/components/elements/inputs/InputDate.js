import Input from "./Input";

const InputDate = (props) => {
  const {
    placeholder,
    name,
    value,
    onChange,
  } = props;

  return (
    <Input
      type        = 'date'
      placeholder = { placeholder}
      name        = { name }
      value       = { value }
      onChange    = { onChange }
    />
  );
};

export default InputDate;
