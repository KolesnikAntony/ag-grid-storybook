import { useEffect, useMemo } from 'react';
import GridLoading from '../components/grid/gridLoading';

export const useLoadingView = (gridApi, isLoading) => {
  useEffect(() => {
    if (gridApi) {
      isLoading && setTimeout(() => gridApi.showLoadingOverlay());
    }
  }, [isLoading, gridApi]);

  return useMemo(() => {
    return GridLoading;
  }, []);
};
