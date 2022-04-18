import { useMemo } from 'react';

export const useGridStyle = () => {
  const containerStyle = useMemo(() => ({
    flexGrow: 1,
    height: '50rem',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '1.4rem',
    backgroundColor: '#fff',
    boxShadow: '0 0.4rem 0.8rem 0 hsl(0deg 0% 61% / 15%)',
    overflow: 'hidden',
  }), []);
  const gridStyle = useMemo(() => ({ flexGrow: 1, height: 'auto', width: '100%' }), []);
  return { containerStyle, gridStyle };
};
