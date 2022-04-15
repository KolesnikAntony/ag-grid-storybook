import React from 'react';
import GridWrapper from '../../../components/grid/billing/billing-wrapper';

export default {
  title: 'Components/GridBilling',
  component: GridWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
};

const Template = (args) => {
  return <GridWrapper {...args} />;
};

export const Default = Template.bind({});
