import React, { useCallback, useState } from 'react';
import { STATES } from '../../api';
import { useFilter } from '../../hooks/useFilter';
import { useColumnView } from '../../hooks/useColumnView';
import { useToggle } from '../../hooks/useToogle';
import { useSelectedRow } from '../../hooks/useSelectedRow';
import Box from '@mui/material/Box';
import Header from './header';
import Dropdown from './dropdown';
import SelectedRow from './selected-row';
import Grid from './grid';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';

const GridWrapper = () => {
  const [rowData] = useState(STATES.billingState);
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

export default GridWrapper;
