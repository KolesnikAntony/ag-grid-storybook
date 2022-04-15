import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import GeneralGrid from '../../../../components/general-grid/general-grid';
import { GRID_TYPES } from '../../../../constants/grid-types';
import Redirect from '../../../../hoks/redirect';

const BillingWrapper = () => {
  const gridProperties = {
    pagination: true,
    rowCount: 50,
    isLoading: false,
    error: null,
    rowSelection: 'multiply',
  };
  return (
    <MemoryRouter>
      <Redirect>
        <Routes>
          <Route path="/billing/*" element={<GeneralGrid type={GRID_TYPES.billing} {...gridProperties} />} />
          <Route path="/case" element={<GeneralGrid type={GRID_TYPES.casesToInvoice} {...gridProperties} />} />
          <Route path="/transactions" element={<GeneralGrid type={GRID_TYPES.transactions} {...gridProperties} />} />
        </Routes>
      </Redirect>
    </MemoryRouter>
  );
};

export default BillingWrapper;
