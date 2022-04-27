import { useCallback, useState } from 'react';

export const useColumnView = (columnApi) => {
  const deps = ['btn-view', 'btn-send', 'btn-print', 'checkbox'];

  const allColumnsKey = columnApi
    .getAllColumns()
    .map((el) => {
      if (deps.includes(el.colId)) {
        return null;
      } else {
        return el.colId;
      }
    })
    .filter((el) => el);

  const state = allColumnsKey.reduce((a, v) => ({ ...a, [v]: true }), {});

  const [column, setColumn] = useState(state);

  const handleShowColumn = useCallback(
    (e, col) => {
      setColumn((prev) => {
        let currentColumn = { ...prev };
        currentColumn[col] = e.target.checked;
        return currentColumn;
      });
      columnApi.setColumnVisible(col, e.target.checked);
    },
    [columnApi]
  );
  return [column, handleShowColumn];
};
