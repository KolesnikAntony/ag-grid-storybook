import React from 'react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import GeneralGrid from '../../../../features/general-grid/general-grid';
import { GRID_TYPES } from '../../../../constants/grid-types';
import Redirect from '../../../../hoks/redirect';

const BillingWrapper = ({ table }) => {
  const gridProperties = {
    pagination: true,
    rowCount: 50,
    isLoading: false,
    error: null,
    rowSelection: 'multiple',
  };
  return (
    <MemoryRouter>
      <Redirect table={table}>
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
