import { useStore } from '../../store/store';

export const useSelector = () => {
  const [state] = useStore();
  return {
    tabs: state.sliceTabFilter.tabs,
    tabsModel: state.sliceTabModel,
  };
};
