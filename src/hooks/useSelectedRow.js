import { useCallback, useState } from 'react';

export const useSelectedRow = (gridApi) => {
  const [selectedRow, setSelectedRow] = useState('');

  const handleSelectionChanged = useCallback(() => {
    const numbers = gridApi
      .getSelectedRows()
      .map((el) => el.number)
      .join(', ');
    setSelectedRow(numbers);
  }, [gridApi]);

  return [selectedRow, handleSelectionChanged];
};
