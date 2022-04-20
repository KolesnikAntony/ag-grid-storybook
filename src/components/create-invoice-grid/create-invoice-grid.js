import React, { useCallback, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useColumnDefs } from '../../hooks/useColumnDefs';
import { useDefaultColDef } from '../../hooks/useDefaultColDef';
import { GRID_TYPES } from '../../constants/grid-types';
import { STATES } from '../../api';
import { GridApiContext } from '../../context/GridApiContext';
import { Typography } from '@mui/material';
// import { useGridStyle } from '../../hooks/useGridStyle';
import Box from '@mui/material/Box';
import './create-invoice-ag-grid-style.scss';

const CreateInvoiceGrid = ({ colDef }) => {
  const [gridApi, setGridApi] = useState(null);
  const columnDefs = useColumnDefs(GRID_TYPES.createInvoice);
  const defaultColDef = useDefaultColDef(colDef);
  const [rowData, setRowData] = useState(STATES.createInvoiceState);
  const [total, setTotal] = useState(null);
  const [buffer, setBuffer] = useState([]);

  //SUM START<=====================>
  useEffect(() => {
    const pricesTotal = rowData.length
      ? rowData.map((row) => +row['unit_mt'] * +row['quantity'] || 0).reduce((sum, value) => sum + value)
      : 0;
    setTotal(pricesTotal);
  }, [rowData]);

  const onCellValueChanged = useCallback((params) => {
    const { data, newValue, column } = params;

    if (column.colId === 'quantity') {
      setRowData((prev) => {
        return prev.map((el) => (data.id === el.id ? { ...el, quantity: newValue } : el));
      });
    }
  }, []);
  //SUM END<=====================>

  //FUNCTION THAN SET GRID API WHEN GRID IS READY
  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
  }, []);

  //COPY PASTE ================START
  const handleCopy = useCallback(() => {
    const selectedRow = gridApi?.getSelectedRows();
    if (selectedRow.length) {
      const copiedState = selectedRow.map((el) => ({
        ...el,
        id: Math.ceil(Math.random() * 1001),
      }));
      setBuffer(copiedState);
    } else {
      setBuffer(null);
      alert('No selected rows');
    }
  }, [gridApi]);

  const handlePast = useCallback(() => {
    if (buffer) {
      const newState = [...buffer, ...rowData];
      setRowData(newState);
    } else {
      alert('Buffer is empty');
    }
    setBuffer(null);
  }, [buffer, rowData]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      let charCode = String.fromCharCode(event.which).toLowerCase();
      if ((event.ctrlKey || event.metaKey) && charCode === 'c') {
        event.preventDefault();
        handleCopy();
      } else if ((event.ctrlKey || event.metaKey) && charCode === 'v') {
        event.preventDefault();
        handlePast();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCopy, handlePast]);

  //COPY PASTE ================END

  return (
    <GridApiContext value={{ gridApi, setRowData }}>
      <Box sx={{ backgroundColor: 'white' }}>
        <Box>
          <AgGridReact
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowData={rowData}
            onCellValueChanged={onCellValueChanged}
            onGridReady={onGridReady}
            domLayout={'autoHeight'}
            rowSelection={'multiple'}
            rowDragManaged={true}
            rowDragEntireRow={true}
            rowDragMultiRow={true}
          />
        </Box>
        <Typography sx={{ textAlign: 'right', marginTop: '2.5rem' }}>Due amount : {total} CHF</Typography>
      </Box>
    </GridApiContext>
  );
};

export default CreateInvoiceGrid;
