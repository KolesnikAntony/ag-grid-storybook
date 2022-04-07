import React, { useState } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './test.scss';
import 'ag-grid-enterprise';

import Grid from './components/grid/grid';

const App = () => {
  const gridProperties = {
    pagination: true,
    rowCount: 50,
    isLoading: false,
    error: null,
    isAuth: true,
    isEmpty: false,
  };
  const [state] = useState([]);

  return <Grid {...gridProperties} state={state} />;
};

export default App;
