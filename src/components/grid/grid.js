import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import PropTypes from 'prop-types';
import GridLoading from './gridLoading';
import GridEmpty from './gridEmpty';

const Grid = (props) => {
  const { state, pagination, rowCount, isLoading, error, isSortable, isResizable, isFilterMenu, rowSelection } = props;

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
      flex: 1,
      minWidth: 100,
      cellEditorPopup: false,
      sortable: isSortable,
      resizable: isResizable,
      suppressMenu: !isFilterMenu,
    };
  }, [isSortable, isResizable, isFilterMenu]);

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
      error: error,
    }),
    [error]
  );

  const rowStyle = { background: '' };

  const getRowStyle = (params) => {
    if (params.data.isDeleted) {
      return { background: 'rgba(112,3,16,0.4)', pointerEvents: 'none' };
    }

    if (params.data.isDisabled) {
      return { background: 'rgba(87,94,86,0.4)', pointerEvents: 'none' };
    }

    if (params.data.isUpdated) {
      return { background: 'rgba(46,173,31,0.4)' };
    }
    if (params.data.isError) {
      return { background: 'rgba(252, 69, 3, 0.4)', color: 'red' };
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
          animateRows={true}
          onGridReady={onGridReady}
          pagination={pagination}
          paginationPageSize={rowCount}
          noRowsOverlayComponentFramework={noRowsOverlayComponent}
          noRowsOverlayComponentParams={noRowsOverlayComponentParams}
          loadingOverlayComponentFramework={loadingOverlayComponent}
          serverSideSortingAlwaysResets={true}
          rowSelection={rowSelection}
          rowMultiSelectWithClick={true}
          // suppressRowClickSelection={false}
          // onSelectionChanged={onSelectionChanged}
          suppressClickEdit={true}
          suppressCellSelection={true}
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
  error: PropTypes.string,
  isSortable: PropTypes.bool,
  isResizable: PropTypes.bool,
  isFilterMenu: PropTypes.bool,
  rowSelection: PropTypes.string,
  // deletedIndex: PropTypes.number,
  // disabledIndex: PropTypes.number,
};

Grid.defaultProps = {
  state: [],
  rowCount: 10,
};

export default Grid;
