import { useRef } from 'react';
import useBlur from '../util/useBlur';

const Label = (props) => {
  const ref = useRef(null);
  useBlur(ref, props.onChange);
  return <label contentEditable={true} ref={ref}><b>{props.label}</b></label>;
};
export default Label;
