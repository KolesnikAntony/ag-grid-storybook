import { createContext } from 'react';

export const GridContext = createContext(null);

export const GridApiContext = ({ value, children }) => {
  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};
