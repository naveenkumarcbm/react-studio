const Textarea = (props) => (
  <div className="textarea">
    <label>{props.label || 'Textarea'}</label>
    <textarea {...props} />
  </div>
);

export default Textarea;
