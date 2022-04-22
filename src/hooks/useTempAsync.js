import React, { useEffect, useState } from 'react';
import { GRID_TYPES } from '../constants/grid-types';
import { STATES } from '../api';
import('regenerator-runtime');

export const useTempAsync = (type) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fn = async () => {
      if (type === GRID_TYPES.billing) {
        await setState(STATES.billingState);
      }
      if (type === GRID_TYPES.casesToInvoice) {
        await setState(STATES.casesToInvoiceState);
      }
      if (type === GRID_TYPES.transactions) {
        await setState([]);
      }
    };
    setTimeout(fn, 1000);
  }, [type]);
  return state;
};
