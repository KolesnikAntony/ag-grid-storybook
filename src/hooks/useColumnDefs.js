import { useMemo } from 'react';
import { GRID_TYPES } from '../constants/grid-types';
import { billingColumns } from '../common/column-defs/billing';
import { transactionsColumns } from '../common/column-defs/transactions';
import { casesToInvoiceColumns } from '../common/column-defs/cases-to-invoice';

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
  }, [type]);
};
