import { useEffect } from 'react';

export default function useBlur(ref, cb) {
  const updateValue = (e) => {
    cb(e.target.innerText) || console.log(e.target.innerText);
  };

  useEffect(() => {
    let _ref = ref;
    ref?.current.addEventListener('blur', updateValue);
    return () => _ref?.current?.removeEventListener('blur', updateValue);
  }, []);
}
