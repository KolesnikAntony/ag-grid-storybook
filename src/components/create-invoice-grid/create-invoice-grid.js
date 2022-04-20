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
// import regeneratorRuntime from "regenerator-runtime";

const CreateInvoiceGrid = ({ colDef }) => {
  const [gridApi, setGridApi] = useState(null);
  const columnDefs = useColumnDefs(GRID_TYPES.createInvoice);
  const defaultColDef = useDefaultColDef(colDef);
  const [rowData, setRowData] = useState(STATES.createInvoiceState);
  const [total, setTotal] = useState(null);
  // const [buffer, setBuffer] = useState([]);
  // const [clipboard, setClipboard] = useState([]);

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
      // setBuffer(copiedState);
      // navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      //   if (result.state == "granted" || result.state == "prompt") {
      //     alert("Write access ranted!");
      //   }
      // });
      navigator.clipboard.writeText(JSON.stringify(copiedState));
    } else {
      // setBuffer(null);
      // setTimeout(() => navigator.clipboard.writeText(''));
    }
  }, [gridApi]);

  const handlePaste = useCallback(() => {
    // const readClipboard = async () => {
    //   const clipBoard = await navigator.clipboard.readText()
    //   console.log('clipBoard', clipBoard)
    // }
    // readClipboard().catch(console.error)

    navigator.clipboard.readText().then((obj) => {
      console.log('obj', obj)
      if (obj) {
        let newState;
        try {

          let clipboard = JSON.parse(obj);

          if (clipboard.length) {
            newState = [...clipboard, ...rowData];
            setRowData(newState);
            
            // setTimeout(() => navigator.clipboard.writeText('').then(() => alert('Clipboard is not empty')));
          }
        } catch(e) {}
        // setClipboard(JSON.parse(obj));
        // setBuffer(clipboard);
  
        // console.log('clipboard', clipboard)
        // console.log('buffer', buffer)
  
        // if (buffer.length) {
        //   newState = [...buffer, ...rowData];
        //   setRowData(newState);
        //   alert('Buffer is not empty');
        // } 
        
        // setBuffer([]);
        // setClipboard([]);
        
      } else {
        alert('Buffer and clipboard is empty');
      }
    });
    // navigator.clipboard.readText().then((obj) => console.log(JSON.parse(obj)));    
  }, [rowData]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      let charCode = String.fromCharCode(event.which).toLowerCase();
      if (!event.shiftKey && (event.ctrlKey || event.metaKey) && charCode === 'c') {
        event.preventDefault();
        handleCopy();
      } else if (!event.shiftKey && (event.ctrlKey || event.metaKey) && charCode === 'v') {
        event.preventDefault();
        handlePaste();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCopy, handlePaste]);

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
