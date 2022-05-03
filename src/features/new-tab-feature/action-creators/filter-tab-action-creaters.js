import { ACTIONS } from '../../../constants/actions';

export const filterTabAC = {
  setTabs: (tabs) => ({
    type: ACTIONS.filterTabs.setTabs,
    payload: tabs,
  }),
  addTab: (tab) => ({
    type: ACTIONS.filterTabs.addTabs,
    payload: tab,
  }),
};