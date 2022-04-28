import { useCallback, useEffect } from 'react';
import { useDispatch } from '../../store/store';

import { SELECTORS } from '../../selectors/selectors';
import { filterTabAC } from '../../features/general-grid/action-creators/filter-tab-action-creaters';

export const useTabsView = () => {
  const { useTabsSelector } = SELECTORS;

  const tabs = useTabsSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    const localItem = localStorage.getItem('tabsViews');
    if (localItem) {
      const state = JSON.parse(localItem);
      dispatch(filterTabAC.setTabs(state));
    }
  }, [dispatch]);

  useEffect(() => {
    Object.keys(tabs).length && localStorage.setItem('tabsViews', JSON.stringify(tabs));
  }, [tabs]);

  const handleShowTabs = useCallback(
    (e, col) => {
      const state = { ...tabs, [col]: e.target.checked };
      dispatch(filterTabAC.setTabs(state));
    },
    [dispatch, tabs]
  );

  return [tabs, handleShowTabs];
};
