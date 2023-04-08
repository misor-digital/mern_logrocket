import { InputText, InputDate } from '../inputs';

const FormGroup = (props) => {
  const {
    hasLabel = true,
    isDate,
    placeholder,
    name,
    value,
    onChange,
  } = props;

  let labelElement, inputElement;

  !!hasLabel
    ? labelElement = <label htmlFor = { name }>{ placeholder }</label>
    : labelElement = null;

  !!isDate
    ? inputElement =
      <InputDate
        placeholder = { placeholder }
        name        = { name }
        value       = { value }
        onChange    = { onChange }
      />
    : inputElement =
      <InputText    
        placeholder = { placeholder }
        name        = { name }
        value       = { value }
        onChange    = { onChange }
      />;

  return (
    <div className="form-group">
      { labelElement }
      { inputElement }
    </div>
  );
};

export default FormGroup;
