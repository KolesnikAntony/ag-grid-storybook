import { useMemo } from 'react';
import GridEmpty from '../../components/grid-overlayouts/gridEmpty';

export const useEmptyErrorView = (error) => {
  //SET EMPTY OR ERROR VIEW

  console.log(error);
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
