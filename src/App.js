import React, { useState } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './test.scss';
import 'ag-grid-enterprise';

import Grid from './components/grid/grid';
import { STATES } from './api';

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

  return <Grid {...gridProperties} state={state} />;
};

export default App;
