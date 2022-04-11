import React, { useState } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './test.scss';
import 'ag-grid-enterprise';

import Grid from './components/grid/grid';
import { STATES } from './api';
import { MemoryRouter, NavLink, Route, Routes } from 'react-router-dom';
import GridWrapper from './components/grid - billing/grid-wrapper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const App = () => {
  const [state] = useState(STATES.default);

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
          </Stack>
        </Box>
        <Routes>
          <Route path="/" element={<Grid {...gridProperties} state={state} />} />
          <Route path="/billing" element={<GridWrapper />} />
        </Routes>
      </MemoryRouter>
      ;
    </Box>
  );
};

export default App;
