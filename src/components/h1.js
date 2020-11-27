import React, { useRef } from 'react';
import useBlur from '../util/useBlur';

const H1 = (props) => {
  const ref = useRef(null);
   useBlur(ref, props.onChange);

  return (
    <h1 ref={ref} contentEditable={true}>
      {props.label}
    </h1>
  );
};
export default H1;
