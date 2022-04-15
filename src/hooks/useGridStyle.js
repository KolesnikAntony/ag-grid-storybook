import { useMemo } from 'react';

export const useGridStyle = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '1000px' }), []);
  const gridStyle = useMemo(() => ({ height: 'calc(100% - 40px)', width: '100%' }), []);
  return { containerStyle, gridStyle };
};
