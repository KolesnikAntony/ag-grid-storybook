import React from 'react';
import GridStory from './grid';
import { STATES } from '../../api';

export default {
  title: 'Components/Grid',
  component: GridStory,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    pagination: {
      description: 'Toggle pagination to infinity scroll',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    rowCount: {
      description: 'Choose count of visible rows',
      control: {
        type: 'select',
      },
      options: [10, 50, 75, 100, 200],
      defaultValue: 10,
    },
    arrayVariation: {
      description: 'Choose kind of state',
      options: ['Default, Empty, Deleted, Disabled'],
      control: {
        type: 'select',
      },
      defaultValue: 'Default',
    },
    isEmpty: {
      description: 'When array with data is empty',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    isLoading: {
      description: 'When we waiting for a data',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    isError: {
      description: 'When there is some error',
      control: {
        type: 'text',
      },
      defaultValue: '',
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
    default:
      return [];
  }
};

const Template = ({ arrayVariation, ...args }) => {
  const state = getCurrentState(arrayVariation);
  return <GridStory {...args} state={state} />;
};

export const Default = Template.bind({});
Default.args = { pagination: false,  };
