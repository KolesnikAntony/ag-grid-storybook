import { createContext } from 'react';

export const TabContext = createContext(null);

export const GridTabsContext = ({ value, children }) => {
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};
