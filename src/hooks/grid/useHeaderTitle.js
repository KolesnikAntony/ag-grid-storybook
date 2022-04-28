import { useContext, useMemo } from 'react';
import { GRID_TYPES } from '../../constants/grid-types';
import { GridContext } from '../../context/GridApiContext';

export const useHeaderTitle = () => {
  const { type } = useContext(GridContext);
  return useMemo(() => {
    if (type === GRID_TYPES.billing) {
      return 'Invoices';
    }
    if (type === GRID_TYPES.casesToInvoice) {
      return 'Cases to invoice';
    }
    if (type === GRID_TYPES.transactions) {
      return 'Transactions';
    }
  }, [type]);
};
