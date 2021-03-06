import { useRef } from 'react';
import useBlur from '../util/useBlur';

const P = (props) => {
  const ref = useRef(null);
  useBlur(ref, props.onChange);
  return <p contentEditable={true} ref={ref}>{props.label}</p>;
};
export default P;