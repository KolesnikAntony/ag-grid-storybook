import { useMemo } from 'react';

export const useDefaultColDef = (params) => {
  return useMemo(() => {
    return {
      flex: 1,
      // minWidth: 110,
      filter: true,
      editable: false,
      cellEditorPopup: false,
      menuTabs: ['filterMenuTab'],
      ...params,
    };
  }, [params]);
};
