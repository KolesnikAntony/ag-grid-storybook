import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { GRID_TYPES } from '../../constants/grid-types';
import { GridContext } from '../../context/GridApiContext';

export const useColumnView = (columnApi) => {
  const { type } = useContext(GridContext);
  const excludes = useMemo(() => {
    switch (type) {
      case GRID_TYPES.billing:
        return ['btn-view', 'btn-send', 'btn-print', 'checkbox'];
      default:
        return [];
    }
  }, [type]);

  const allColumns = useMemo(
    () =>
      columnApi
        .getAllColumns()
        .map((el) => {
          if (excludes.includes(el.colId)) {
            return null;
          } else {
            return el.colId;
          }
        })
        .filter((el) => el)
        .reduce((a, v) => ({ ...a, [v]: true }), {}),
    [columnApi, excludes]
  );

  const [column, setColumn] = useState(allColumns);

  const localItems = useMemo(() => localStorage.getItem(type), [type]);

  const setLocalItems = useCallback(() => {
    Object.keys(column).length && localStorage.setItem(type, JSON.stringify(column));
    Object.entries(column).forEach(([key, value]) => {
      columnApi.setColumnVisible(key, value);
    });
  }, [type, column, columnApi]);

  useEffect(() => {
    if (localItems) {
      const state = JSON.parse(localItems);
      setColumn(state);
    }
  }, [localItems]);

  useEffect(() => {
    setLocalItems();
  }, [setLocalItems]);

  const handleColumnOrder = useCallback((col) => {
    setColumn(col);
  }, []);

  const handleShowColumn = useCallback((e, col) => {
    setColumn((prev) => {
      let currentColumn = { ...prev };
      currentColumn[col] = e.target.checked;
      return currentColumn;
    });
  }, []);

  return [column, handleShowColumn, handleColumnOrder];
};
