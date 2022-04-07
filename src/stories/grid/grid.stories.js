import React from 'react';
import Grid from '../../components/grid/grid';
import { STATES } from '../../api';

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    state: {
      description: 'Hello',
      control: {
        type: null,
      },
    },
    stateControl: {
      description: 'Choose kind of state (Storybook only)',
      options: ['Default', 'Empty', 'Deleted', 'Disabled', 'Updated'],
      control: {
        type: 'select',
      },
      defaultValue: 'Default',
    },
    selectedRow: {
      description: 'Click to row please',
      control: {
        type: null,
      },
    },
    rowSelection: {
      description: 'Choose type of selection',
      options: ['single', 'multiple'],
      control: {
        type: 'select',
      },
      defaultValue: 'single',
    },
    pagination: {
      description: 'Toggle pagination to infinity scroll',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    rowCount: {
      description: 'Choose count of visible rows',
      control: {
        type: 'select',
      },
      options: [10, 50, 75, 100, 200],
      defaultValue: 10,
    },
    isLoading: {
      description: 'When we waiting for a data',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    error: {
      description: 'When there is some error. Before you have to choose state control = <b>Empty</b>',
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    isSortable: {
      description: 'Ascending and descending table rows',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    isResizable: {
      description: 'Resize column width',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    isFilterMenu: {
      description: 'Additional filters from column dropdown',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    isAuth: {
      description: 'Authorization indicator',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
};

const getCurrentState = (view) => {
  switch (view) {
    case 'Default':
      return STATES.default;
    case 'Empty':
      return [];
    case 'Deleted':
      return STATES.deleted;
    case 'Disabled':
      return STATES.disabled;
    case 'Updated':
      return STATES.updated;
    default:
      return [];
  }
};

const Template = ({ stateControl, ...args }) => {
  const state = getCurrentState(stateControl);
  return <Grid {...args} state={state} />;
};

export const Default = Template.bind({});
Default.args = { stateControl: 'Default', error: '' };

export const WithPagination = Template.bind({});
WithPagination.args = { ...Default.args, pagination: true };

export const LoadingState = Template.bind({});
LoadingState.args = { ...WithPagination.args, isLoading: true };

export const EmptyState = Template.bind({});
EmptyState.args = { ...WithPagination.args, stateControl: 'Empty' };

export const ErrorState = Template.bind({});
ErrorState.args = { ...EmptyState.args, error: 'Hmm you got some error from server' };

export const WithDeletedRowState = Template.bind({});
WithDeletedRowState.args = { ...WithPagination.args, stateControl: 'Deleted' };

export const WithDisabledRowState = Template.bind({});
WithDisabledRowState.args = { ...WithPagination.args, stateControl: 'Disabled' };
export const WithUpdatedRowState = Template.bind({});
WithUpdatedRowState.args = { ...WithPagination.args, stateControl: 'Updated' };
