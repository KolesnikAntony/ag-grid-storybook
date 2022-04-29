import { ACTIONS } from '../../../constants/actions';

export const initialTabModels = {
  'Invoices to send': {
    dispatch: {
      values: ['sent'],
    },
  },
  'Invoices sent': {
    dispatch: {
      values: ['not-sent'],
    },
  },
  'Invoices with reminders': {
    status: {
      values: ['1st-reminder', '2nd-reminder', '3rd-reminder', 'formal-notice', 'pursuit'],
    },
  },
  'Invoices with errors': {
    dispatch: {
      values: ['error'],
    },
  },
};

export const sliceTabModels = (state, action) => {
  switch (action.type) {
    case ACTIONS.filterTabs.setTabs:
      return { ...state, tabs: action.payload };
    case ACTIONS.filterTabs.addTabs:
      return { ...state, [action.payload.key]: action.payload.model };
    default:
      throw new Error('No action');
  }
};
