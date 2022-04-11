import { useMemo } from 'react';
import GridEmpty from '../components/grid/gridEmpty';

export const useEmptyErrorView = (error) => {
  //SET EMPTY OR ERROR VIEW
  const noRowsOverlayComponent = useMemo(() => {
    return GridEmpty;
  }, []);

  const noRowsOverlayComponentParams = useMemo(
    () => ({
      error: error,
    }),
    [error]
  );
  return { noRowsOverlayComponent, noRowsOverlayComponentParams };
};
