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
    rowCount: 50,
    isLoading: false,
    isEmpty: false,
    // isError: null,
    // isAuth: true,
  },
};

export const Template = (args) => <Grid {...args} />;
