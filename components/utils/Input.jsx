import { FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

const InputCustom = ({
  label,
  type,
  name,
  value,
  handleChange,
  placeholder
}) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </FormGroup>
  );
};

InputCustom.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default InputCustom;
