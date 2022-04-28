import { useStore } from '../store/store';

export const SELECTORS = {
  useTabsSelector: () => {
    const [state] = useStore();
    return state.sliceTabFilter.tabs;
  },
};
