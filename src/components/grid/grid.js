import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import PropTypes from 'prop-types';
import GridLoading from './gridLoading';
import GridError from './gridError';
import GridEmpty from './gridEmpty';

const Grid = (props) => {
  const { pagination, rowCount, isLoading, isEmpty, isError, state } = props;
  // console.log(pagination);

  const containerStyle = useMemo(() => ({ width: '100%', height: '300px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  const columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

  const data = useMemo(() => state, [state]);

  const [rowData, setRowData] = useState(data);
  const [gridApi, setGridApi] = useState(null);

  // const iAmRef = React.useRef(null);

  useEffect(() => {
    if (gridApi) {
      !isEmpty && setRowData(data);
      isLoading && gridApi.showLoadingOverlay();
    }
  }, [gridApi, isLoading, isEmpty, data]);

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

  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
  }, []);

  const loadingOverlayComponent = React.useMemo(() => {
    return GridLoading;
  }, []);

  const noRowsOverlayComponent = React.useEffect(() => {
    if (isError) {
      return GridError;
    }

    return GridEmpty;
  }, [isError, isEmpty]);

  const rowStyle = { background: '#eee' };

  const getRowStyle = (params) => {
    if (params.data.isDeleted) {
      return { background: 'red', pointerEvents: 'none' };
    }

    if (params.data.isDisabled) {
      return { background: 'gray', pointerEvents: 'none' };
    }
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowStyle={rowStyle}
          getRowStyle={getRowStyle}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          // suppressLoadingOverlay={true}
          animateRows={true}
          onGridReady={onGridReady}
          pagination={pagination}
          paginationPageSize={rowCount}
          // ref={iAmRef}
          noRowsOverlayComponentFramework={noRowsOverlayComponent}
          loadingOverlayComponentFramework={loadingOverlayComponent}
          serverSideSortingAlwaysResets={true}
          // serverSideFilteringAlwaysResets={false}
        />
      </div>
    </div>
  );
};

Grid.propTypes = {
  pagination: PropTypes.bool,
  rowCount: PropTypes.number,
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool,
  isError: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  isAuth: PropTypes.bool,
  deletedIndex: PropTypes.number,
  disabledIndex: PropTypes.number,
};

Grid.defaultProps = {
  // pagination: true,
  // rowCount: 10,
  // isLoading: true,
  // isError: null,
  // isAuth: true,
  // isEmpty: false,
  deletedIndex: 1,
  disabledIndex: 2,
};

export default Grid;
