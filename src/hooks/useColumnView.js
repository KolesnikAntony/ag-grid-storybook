import { useCallback, useEffect, useState } from 'react';
// import useLocalStorage from './useLocalStorage'

export const useColumnView = (columnApi, excludes = []) => {
  const allColumns = columnApi
    .getAllColumns()
    .map((el) => {
      if (excludes.includes(el.colId)) {
        return null;
      } else {
        return el.colId;
      }
    })
    .filter((el) => el)
    .reduce((a, v) => ({ ...a, [v]: true }), {});

  const [column, setColumn] = useState(allColumns);

  useEffect(() => {
    const localItem = localStorage.getItem('columnsView');
    if (localItem) {
      const state = JSON.parse(localItem);
      setColumn(state);
    }
  }, []);

  useEffect(() => {
    Object.keys(column).length && localStorage.setItem('columnsView', JSON.stringify(column));
    Object.entries(column).forEach(([key, value]) => {
      columnApi.setColumnVisible(key, value);
    });
  }, [column, columnApi]);

  const handleShowColumn = useCallback((e, col) => {
    setColumn((prev) => {
      let currentColumn = { ...prev };
      currentColumn[col] = e.target.checked;
      return currentColumn;
    });
  }, []);

  // const [localState, setLocalState] = useLocalStorage('keyColumnView', state);

  return [column, handleShowColumn];
};
