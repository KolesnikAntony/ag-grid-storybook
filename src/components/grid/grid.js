import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import PropTypes from 'prop-types';
import GridLoading from './gridLoading';
import GridEmpty from './gridEmpty';

const Grid = (props) => {
  const { pagination, rowCount, isLoading, isError, state } = props;
  // console.log(pagination);

  const containerStyle = useMemo(() => ({ width: '100%', height: '300px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  const columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

  const rowData = useMemo(() => state, [state]);

  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    if (gridApi) {
      isLoading && gridApi.showLoadingOverlay();
    }
  }, [isLoading, gridApi]);

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

  const loadingOverlayComponent = useMemo(() => {
    return GridLoading;
  }, []);

  const noRowsOverlayComponent = useMemo(() => {
    return GridEmpty;
  }, []);

  const noRowsOverlayComponentParams = useMemo(
    () => ({
      error: isError,
    }),
    [isError]
  );

  const rowStyle = { background: '#eee' };

  const getRowStyle = (params) => {
    if (params.data.isDeleted) {
      return { background: 'red', pointerEvents: 'none' };
    }

    if (params.data.isDisabled) {
      return { background: 'gray', pointerEvents: 'none' };
    }

    if (params.data.isUpdated) {
      return { background: 'green' };
    }
  };

  // const onSelectionChanged = (e) => {
  //   console.log(e)
  //   // const selectedRows = gridOptions.api.getSelectedRows();
  //   // document.querySelector('#selectedRows').innerHTML =
  //   //   selectedRows.length === 1 ? selectedRows[0].athlete : '';
  // }

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowStyle={rowStyle}
          getRowStyle={getRowStyle}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          animateRows={true}
          onGridReady={onGridReady}
          pagination={pagination}
          paginationPageSize={rowCount}
          noRowsOverlayComponentFramework={noRowsOverlayComponent}
          noRowsOverlayComponentParams={noRowsOverlayComponentParams}
          loadingOverlayComponentFramework={loadingOverlayComponent}
          serverSideSortingAlwaysResets={true}
          rowSelection={'multiply'}
          suppressRowClickSelection={false}
          // onSelectionChanged={onSelectionChanged}
        />
      </div>
    </div>
  );
};

Grid.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object),
  pagination: PropTypes.bool,
  rowCount: PropTypes.number,
  isLoading: PropTypes.bool,
  isError: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  isAuth: PropTypes.bool,
  // deletedIndex: PropTypes.number,
  // disabledIndex: PropTypes.number,
};

Grid.defaultProps = {
  // pagination: true,
  // rowCount: 10,
  // isLoading: true,
  // isError: null,
  // isAuth: true,
  // isEmpty: false,
  // deletedIndex: 1,
  // disabledIndex: 2,
};

export default Grid;
