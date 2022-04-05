import React, { useCallback, useMemo, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Loading from './loading';
import PropTypes from 'prop-types';

const Grid = (props) => {
  const { pagination, rowCount, isLoading, isError, isAuth, isEmpty } = props;

  const containerStyle = useMemo(() => ({ width: '100%', height: '800px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  const columnDefs = [{ field: 'make'}, { field: 'model' }, { field: 'price' }];

  // specify the data
  // const rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000,},
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  // ];

  const rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000,},
    { make: 'Ford', model: 'Mondeo', price: 32000 },
  ];


  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {}, []);


  const detailCellRenderer = useMemo(() => {
    // return Loading;
    return <div>test</div>;
  }, []);

  return (
    <div style={containerStyle}>
      <div style={{ height: '100%', paddingTop: '25px', boxSizing: 'border-box' }}>
        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            frameworkComponents={{
              loading: Loading,
            }}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowData={rowData}
            detailCellRenderer={detailCellRenderer}
            suppressLoadingOverlay={true}
            // overlayLoadingTemplate={<Loading/>}
            cacheBlockSize={100}
            maxBlocksInCache={10}
            animateRows={true}
            onGridReady={onGridReady}
            pagination={pagination}
            paginationPageSize={rowCount}
          />
        </div>
      </div>
    </div>
  );
};

Grid.propTypes = {
  pagination: PropTypes.bool,
  rowCount: PropTypes.number,
  isLoading: PropTypes.bool,
  isError: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  isAuth: PropTypes.bool,
  isEmpty: PropTypes.bool,
};

Grid.defaultProps = {
  pagination: true,
  rowCount: 10,
  isLoading: false,
  isError: null,
  isAuth: true,
  isEmpty: false,
};

export default Grid;
