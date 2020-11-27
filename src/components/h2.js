import { useRef } from 'react';
import useBlur from '../util/useBlur';

const H2 = (props) => {
  const ref = useRef(null);
  useBlur(ref, props.onChange);
  return <h2 contentEditable={true} ref={ref}>{props.label}</h2>;
};
export default H2;
