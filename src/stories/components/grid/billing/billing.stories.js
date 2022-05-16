import React from 'react';
import GridWrapper from '../../../components/grid/billing/billing-wrapper';
import { GRID_TYPES } from '../../../../constants/grid-types';
import GeneralGrid from '../../../../features/general-grid/general-grid';
import { API } from '../../../../api';

const { billing, transactions, casesToInvoice } = GRID_TYPES;

export default {
  title: 'Components/GridBilling',
  component: GridWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    type: {
      description: 'Choose table',
      options: [billing, casesToInvoice, transactions],
      value: billing,
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => {
  return <GeneralGrid {...args} />;
};

export const Billing = Template.bind({});
Billing.args = { type: billing, getServerData: API.getBillings };
export const CaseOfInvoices = Template.bind({});
CaseOfInvoices.args = { type: casesToInvoice, getServerData: API.getCases };
export const Transactions = Template.bind({});
Transactions.args = { type: transactions, getServerData: API.getCases };
