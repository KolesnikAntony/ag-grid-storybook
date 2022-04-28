import { ACTIONS } from '../../../constants/actions';

export const initialTabFilter = {
  tabs: {
    'Invoices to send': true,
    'Invoices sent': true,
    'Invoices with reminders': true,
    'Invoices with errors': true,
  },
};

export const sliceTabFilter = (state, action) => {
  switch (action.type) {
    case ACTIONS.filterTabs.setTabs:
      return { ...state, tabs: action.payload };
    default:
      throw new Error('No action');
  }
};
