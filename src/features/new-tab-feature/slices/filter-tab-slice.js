import { ACTIONS } from '../../../constants/actions';

const sendModel = {
  dispatch: {
    values: ['sent'],
  },
};

const sentModel = {
  dispatch: {
    values: ['not-sent'],
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
      id: 1,
    },
    {
      title: 'Invoices sent',
      view: true,
      model: sentModel,
      id: 2,
    },
    {
      title: 'Invoices with reminders',
      view: true,
      model: reminderModel,
      id: 3,
    },
    {
      title: 'Invoices with errors',
      view: true,
      model: errorModel,
      id: 4,
    },
  ],
};

export const sliceTabFilter = (state, action) => {
  switch (action.type) {
    case ACTIONS.filterTabs.setTabs:
      return { ...state, tabs: action.payload };
    case ACTIONS.filterTabs.addTabs:
      return { ...state, tabs: [...state.tabs, action.payload] };
    case ACTIONS.filterTabs.removeTab:
      return { ...state, tabs: state.tabs.filter((el) => el.id !== action.payload) };
    default:
      throw new Error('No action');
  }
};
