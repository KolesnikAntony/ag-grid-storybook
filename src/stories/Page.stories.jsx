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
      description: 'Toggle pagination',
      control: {
        type: 'boolean',
      },
    },
    rowCount: {
      description: 'Count of rows',
      control: 'select',
      options: [10, 50, 75, 100, 200],
    },
    isLoading: false,
    isEmpty: false,
    // isError: null,
    // isAuth: true,
  },
};

const Template = (args) => <Grid {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { pagination: false, rowCount: 10, isLoading: false, isEmpty: false };
