import { useRef } from 'react';
import useBlur from '../util/useBlur';

const Button = (props) => {
  const ref = useRef(null);
  useBlur(ref, props.onChange);
  return <button contentEditable={true} ref={ref}>{props.label}</button>;
};
export default Button;
