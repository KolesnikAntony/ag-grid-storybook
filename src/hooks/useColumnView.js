import { useCallback, useState } from 'react';

export const useColumnView = () => {
  const [column, setColumn] = useState({
    uid: true,
    number: true,
    client: true,
    guarantor: true,
    provider: true,
    total: true,
    open: true,
    creation: true,
    due: true,
    status: true,
    dispatch: true,
  });

  const handleShowColumn = useCallback((e, col) => {
    setColumn((prev) => {
      let currentColumn = { ...prev };
      currentColumn[col] = e.target.checked;
      return currentColumn;
    });
  }, []);
  return [column, handleShowColumn];
};
