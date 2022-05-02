import { ACTIONS } from '../../../constants/actions';

const sendModel = {
  dispatch: {
    values: ['not-sent'],
  },
};

const sentModel = {
  status: {
    values: ['1st-reminder', '2nd-reminder', '3rd-reminder', 'formal-notice', 'pursuit'],
  },
};

const reminderModel = {
  status: {
    values: ['1st-reminder', '2nd-reminder', '3rd-reminder', 'formal-notice', 'pursuit'],
  },
};

const errorModel = {
  dispatch: {
    values: ['error'],
  },
};

export const initialTabFilter = {
  tabs: [
    {
      title: 'Invoices to send',
      view: true,
      model: sendModel,
    },
    {
      title: 'Invoices sent',
      view: true,
      model: sentModel,
    },
    {
      title: 'Invoices with reminders',
      view: true,
      model: reminderModel,
    },
    {
      title: 'Invoices with errors',
      view: true,
      model: errorModel,
    },
  ],
};

export const sliceTabFilter = (state, action) => {
  switch (action.type) {
    case ACTIONS.filterTabs.setTabs:
      return { ...state, tabs: action.payload };
    case ACTIONS.filterTabs.addTabs:
      return { ...state, tabs: [...state.tabs, action.payload] };
    default:
      throw new Error('No action');
  }
};
