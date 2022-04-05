import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './test.scss';
import 'ag-grid-enterprise';

import Grid from './components/grid';

const App = () => {
  const gridProperties = {
    pagination: true,
    rowCount: 50,
    isLoading: true,
    isError: null,
    isAuth: true,
    isEmpty: true,
  };

  return <Grid {...gridProperties} />;
};

export default App;
