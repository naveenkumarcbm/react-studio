const Input = (props) => (
    <div className="input">
      <label>{props.label || 'Input'}</label>
      <input {...props} />
    </div>
  );
  
  export default Input;
  