import React, { useCallback, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useColumnDefs } from '../../hooks/useColumnDefs';
import { useDefaultColDef } from '../../hooks/useDefaultColDef';
import { GRID_TYPES } from '../../constants/grid-types';
import { STATES } from '../../api';
import { GridApiContext } from '../../context/GridApiContext';
import { Typography } from '@mui/material';
import { useGridStyle } from '../../hooks/useGridStyle';
import Box from '@mui/material/Box';
import './create-invoice-ag-grid-style.scss';

const CreateInvoiceGrid = ({ colDef }) => {
  const [gridApi, setGridApi] = useState(null);
  const columnDefs = useColumnDefs(GRID_TYPES.createInvoice);
  const defaultColDef = useDefaultColDef(colDef);
  const [rowData, setRowData] = useState(STATES.createInvoiceState);
  const [total, setTotal] = useState(null);

  //SUM START<=====================>
  useEffect(() => {
    if (gridApi) {
      let rowData = [];
      gridApi.forEachNode((node) => rowData.push(node.data));
      const pricesTotal = rowData
        .map((row) => +row['unit_mt'] * +row['quantity'] || 0)
        .reduce((sum, value) => sum + value);
      setTotal(pricesTotal);
    }
  }, [gridApi, rowData]);

  const onCellValueChanged = useCallback((params) => {
    const { data, newValue, column } = params;

    if (column.colId === 'quantity') {
      setRowData((prev) => {
        return prev.map((el) => (data.code === el.code ? { ...el, quantity: newValue } : el));
      });
    }
  }, []);
  //SUM END<=====================>

  //FUNCTION THAN SET GRID API WHEN GRID IS READY
  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
  }, []);

  return (
    <GridApiContext value={gridApi}>
      <Box sx={{ backgroundColor: 'white' }}>
        <Box>
          <AgGridReact
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowData={rowData}
            onCellValueChanged={onCellValueChanged}
            onGridReady={onGridReady}
            domLayout={'autoHeight'}
          />
        </Box>
        <Typography sx={{ textAlign: 'right', marginTop: '2.5rem' }}>Due amount : {total} CHF</Typography>
      </Box>
    </GridApiContext>
  );
};

export default CreateInvoiceGrid;
