const Select = (props) => (
<div className="select">
    <label>{props.label || 'Select'}</label>
    <select {...props}>
      <option value=''>option...</option>
      {props.options?.map((opt, i) => (
        <option value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

export default Select;
