import React from 'react';
import GridWrapper from '../../../components/grid/billing/billing-wrapper';

export default {
  title: 'Components/GridBilling',
  component: GridWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    table: {
      description: 'Choose table',
      options: ['billing', 'case', 'transactions'],
      value: 'billing',
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => {
  return <GridWrapper {...args} />;
};

export const Billing = Template.bind({});
Billing.args = { table: 'billing' };
export const CaseOfInvoices = Template.bind({});
CaseOfInvoices.args = { table: 'case' };
export const Transactions = Template.bind({});
Transactions.args = { table: 'transactions' };
