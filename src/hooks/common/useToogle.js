import { useCallback, useState } from 'react';

export const useToggle = (value) => {
  const [toggle, setToggle] = useState(value);

  const handleToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);
  return [toggle, handleToggle];
};
