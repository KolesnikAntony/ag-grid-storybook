import React, { useCallback, useState } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './test.scss';
import { temp } from './api';
import Box from '@mui/material/Box';
import 'ag-grid-enterprise';
import Header from './components/header';
import Dropdown from './components/dropdown';
import { useFilter } from './hooks/useFilter';
import { useColumnView } from './hooks/useColumnView';
import { useToggle } from './hooks/useToogle';
import Grid from './components/grid';
import { useSelectedRow } from './hooks/useSelectedRow';
import SelectedRow from './components/selected-row';

const App = () => {
  const [rowData] = useState(temp);
  const [gridApi, setGridApi] = useState(null);
  //CUSTOM HOOKS
  const [filteredData, searchValue, searchChangeHandler] = useFilter(rowData);
  const [column, handleShowColumn] = useColumnView();
  const [columnMenuShow, handleShowColumnMenu] = useToggle(false);
  const [selectedRow, onSelectionChanged] = useSelectedRow(gridApi);

  const handleExport = useCallback(() => {
    gridApi.exportDataAsExcel();
  }, [gridApi]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header
        handleExport={handleExport}
        handleShowColumnMenu={handleShowColumnMenu}
        searchValue={searchValue}
        searchChangeHandler={searchChangeHandler}
      />
      <Dropdown columnMenuShow={columnMenuShow} column={column} handleShowColumn={handleShowColumn} />
      {!!selectedRow && <SelectedRow selectedRow={selectedRow} gridApi={gridApi} />}
      <Grid
        onSelectionChanged={onSelectionChanged}
        filteredData={filteredData}
        setGridApi={setGridApi}
        column={column}
      />
    </Box>
  );
};

export default App;
