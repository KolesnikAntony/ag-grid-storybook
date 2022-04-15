import { useMemo } from 'react';

export const useDefaultColDef = (params) => {
  return useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      filter: true,
      // editable: true,
      // cellEditorPopup: false,
      menuTabs: ['filterMenuTab'],
      ...params,
    };
  }, [params]);
};
