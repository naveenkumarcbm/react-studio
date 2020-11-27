import { useRef } from 'react';
import useBlur from '../util/useBlur';

const H3 = (props) => {
  const ref = useRef(null);
  useBlur(ref, props.onChange);
  return <h3 contentEditable={true} ref={ref}>{props.label}</h3>;
};
export default H3;
