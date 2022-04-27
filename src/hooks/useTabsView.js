import { useCallback, useEffect, useState } from 'react';
// import useLocalStorage from './useLocalStorage'

const state = {
  // 'View all': true,
  'Invoices to send': true,
  'Invoices sent': true,
  'Invoices with reminders': true,
  'Invoices with errors': true,
};

export const useTabsView = () => {
  const [tabs, setTabs] = useState(state);

  useEffect(() => {
    const localItem = localStorage.getItem('tabsViews');
    if (localItem) {
      const state = JSON.parse(localItem);
      setTabs(state);
    }
  }, []);

  useEffect(() => {
    Object.keys(tabs).length && localStorage.setItem('tabsViews', JSON.stringify(tabs));
    Object.entries(tabs).forEach(([key, value]) => {});
  }, [tabs]);

  const handleShowTabs = useCallback((e, col) => {
    setTabs((prev) => {
      let currentTab = { ...prev };
      currentTab[col] = e.target.checked;
      return currentTab;
    });
  }, []);

  // const [localState, setLocalState] = useLocalStorage('keyColumnView', state);

  return [tabs, handleShowTabs];
};
