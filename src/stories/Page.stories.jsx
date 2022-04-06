import React from 'react';
import Grid from './../components/grid';

export default {
  title: 'Grid/Table',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    pagination: {
      description: 'Toggle pagination to infinity scroll',
      control: {
        type: 'boolean',
      },
    },
    rowCount: {
      description: 'Choose count of visible rows',
      control: 'select',
      options: [10, 50, 75, 100, 200],
    },
    isEmpty: {
      description: 'When array with data is empty',
    },
    isLoading: {
      description: 'When we waiting for a data',
    },

    // isError: null,
    // isAuth: true,
  },
};

const Template = (args) => <Grid {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { pagination: false, rowCount: 10, isEmpty: false, isLoading: false };
