import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './test.scss';
import 'ag-grid-enterprise';
import { MemoryRouter, NavLink, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import GeneralGrid from './components/general-grid/general-grid';
import { GRID_TYPES } from './constants/grid-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const App = () => {
  // const [state] = useState(STATES.default);

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
    rowSelection: 'multiply',
  };

  return (
    <Box>
      <MemoryRouter>
        <Box sx={{ width: '100%', p: 5, display: 'flex', justifyContent: 'center' }}>
          <Stack direction="row" spacing={2}>
            <Button variant={'outlined'} component={NavLink} to="/">
              Base
            </Button>
            <Button variant={'outlined'} component={NavLink} to="/billing">
              Billing
            </Button>
            <Button variant={'outlined'} component={NavLink} to="/transactions">
              Billing
            </Button>
          </Stack>
        </Box>
        <Routes>
          <Route path="/" element={<GeneralGrid type={GRID_TYPES.casesToInvoice} {...gridProperties} />} />
          <Route path="/billing" element={<GeneralGrid type={GRID_TYPES.billing} {...gridProperties} />} />
          <Route path="/transactions" element={<GeneralGrid type={GRID_TYPES.transactions} {...gridProperties} />} />
        </Routes>
      </MemoryRouter>
    </Box>
  );
};

export default App;
