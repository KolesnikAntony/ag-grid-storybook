import React, { useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './ag-grid.scss';
import 'ag-grid-enterprise';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
// import GeneralGrid from './components/grid/grid';
import GeneralGrid from './components/general-grid/general-grid';
import CasesToInvoiceGrid from './components/cases-to-invoice-grid/cases-to-invoice-grid';
import CreateInvoiceGrid from './components/create-invoice-grid/create-invoice-grid';
import { GRID_TYPES } from './constants/grid-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import { STATES } from './api';
import useStyle from './AppStyle';
import { billingColumns } from './common/columns/billing';
import { STATES } from './api';
import { casesToInvoiceColumns } from './common/columns/cases-to-invoice';

const App = () => {
  const sx = useStyle();
  // const [state] = useState(STATES.default);

  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     navigate('/billing');
  //   }
  // }, [location, navigate]);

  // console.log(location);

  const error = null;

  const getErrorText = (error) => {
    if (error) {
      if (error.status >= 400 && error.status <= 500) {
        return error.message;
      }
      return 'Something was wrong';
    }
    return error;
  };

  const gridProperties = {
    pagination: true,
    rowCount: 50,
    isLoading: false,
    error: getErrorText(error),
    rowSelection: 'multiple',
  };

  return (
    <Box sx={sx.page}>
      <Box sx={sx.pageTabs}>
        <Stack direction="row" spacing={2}>
          <Button variant={'outlined'} component={NavLink} to="/">
            Create invoice
          </Button>
          <Button variant={'outlined'} component={NavLink} to="/billing">
            Billing
          </Button>
          <Button variant={'outlined'} component={NavLink} to="/case">
            Case
          </Button>
          <Button variant={'outlined'} component={NavLink} to="/transactions">
            Trans
          </Button>
        </Stack>
      </Box>
      <Routes>
        <Route path="/" element={<CreateInvoiceGrid type={GRID_TYPES.createInvoice} {...gridProperties} />} />
        <Route
          path="/billing/*"
          element={
            <GeneralGrid
              rowData={STATES.billingState}
              columns={billingColumns}
              type={GRID_TYPES.billing}
              {...gridProperties}
            />
          }
        />
        <Route
          path="/case"
          element={
            <GeneralGrid
              rowData={STATES.casesToInvoiceState}
              columns={casesToInvoiceColumns}
              type={GRID_TYPES.casesToInvoice}
              {...gridProperties}
            />
          }
        />
        <Route path="/transactions" element={<GeneralGrid type={GRID_TYPES.transactions} {...gridProperties} />} />
      </Routes>
    </Box>
  );
};

export default App;
