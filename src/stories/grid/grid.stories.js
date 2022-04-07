import React from 'react';
import GridStory from './grid';

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

const Template = (args) => <GridStory {...args} />;

export const Default = Template.bind({});
Default.args = { pagination: false };
