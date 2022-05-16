import { useCallback, useContext } from 'react';
import { GridContext } from '../../context/GridApiContext';

export const useCallToolPanel = (tool) => {
  const { gridApi } = useContext(GridContext);

  return useCallback(() => {
    const openedTools = gridApi.getOpenedToolPanel();
    if (openedTools === tool) {
      gridApi.closeToolPanel();
    } else {
      gridApi.openToolPanel(tool);
    }
  }, [gridApi, tool]);
};
