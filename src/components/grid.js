import React from 'react';
import Box from '@mui/material/Box';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import ButtonView from '../buttons/button-view';
import ButtonPrint from '../buttons/button-print';
import SendIconComponent from './SendIcon';
import ButtonDispatch from '../buttons/button-dispatсh';
import PopupInvoice from '../popups/popup-invoice';

const Grid = ({ filteredData, column, setGridApi, onSelectionChanged }) => {
  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const handleSendType = (params) => {
    console.log(params);
  };

  return (
    <Box className="ag-theme-alpine" sx={{ height: '600px', width: 'calc(100% - 32px)', p: 2 }}>
      <AgGridReact
        frameworkComponents={{
          viewPop: PopupInvoice,
          getData: ButtonPrint,
          sendIcon: SendIconComponent,
          dispatch: ButtonDispatch,
        }}
        components={{
          sendType: handleSendType,
        }}
        rowClass="rowClass"
        rowData={filteredData}
        fullWidthCellRenderer={'fullWidthCellRenderer'}
        rowSelection={'multiple'}
        suppressRowClickSelection={true}
        onSelectionChanged={onSelectionChanged}
        onGridReady={onGridReady}>
        {!!filteredData.length &&
          Object.keys(filteredData[0]).map(
            (key) =>
              key !== ('id' && 'dispatch') && (
                <AgGridColumn
                  hide={!column[key]}
                  sortable={key === 'status'}
                  filter={key === 'total' ? 'agNumberColumnFilter' : null}
                  key={key}
                  field={key}
                  flex={1}
                  resizable={true}
                />
              )
          )}
        <AgGridColumn headerName={'Dispatch'} width={100} suppressMenu={true} cellRenderer="sendIcon" />
        <AgGridColumn width={60} cellStyle={{ textAlign: 'center' }} suppressMenu={true} cellRenderer="viewPop" />
        <AgGridColumn width={60} cellStyle={{ textAlign: 'center' }} suppressMenu={true} cellRenderer="dispatch" />
        <AgGridColumn width={60} cellStyle={{ textAlign: 'center' }} suppressMenu={true} cellRenderer="getData" />
        <AgGridColumn width={40} suppressMenu={true} multiple checkboxSelection={true} />
      </AgGridReact>
    </Box>
  );
};

export default Grid;
