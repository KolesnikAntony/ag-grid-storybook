import { useMemo } from 'react';
import { GRID_TYPES } from '../constants/grid-types';
import { billingColumns } from '../common/columns/billing';
import { transactionsColumns } from '../common/columns/transactions';
import { casesToInvoiceColumns } from '../common/columns/cases-to-invoice';
import { createInvoiceColumns } from '../common/columns/create-invoice';

export const useColumnDefs = (type) => {
  return useMemo(() => {
    if (type === GRID_TYPES.billing) {
      return billingColumns;
    }
    if (type === GRID_TYPES.transactions) {
      return transactionsColumns;
    }
    if (type === GRID_TYPES.casesToInvoice) {
      return casesToInvoiceColumns;
    }
    if (type === GRID_TYPES.createInvoice) {
      return createInvoiceColumns;
    }
  }, [type]);
};
