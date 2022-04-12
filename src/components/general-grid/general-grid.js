import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { GRID_TYPES } from '../../constants/grid-types';
import { useColumnDefs } from '../../hooks/useColumnDefs';
import { AgGridReact } from 'ag-grid-react';
import { HELPERS } from '../../helpers/helpers';
import { useGridStyle } from '../../hooks/useGridStyle';
import { useDefaultColDef } from '../../hooks/useDefaultColDef';
import { useLoadingView } from '../../hooks/useLoadingView';
import { useEmptyErrorView } from '../../hooks/useEmptyErrorView';
import HeaderControls from './header-controls/header-controls';
import { GridApiContext } from '../../context/GridApiContext';
import CustomHeader from './custom-header/custom-header';
import { billingState } from '../../api';

const GeneralGrid = ({ type, state, colDef, pagination, rowCount, error, isLoading, rowSelection }) => {
  //GRID API
  const [gridApi, setGridApi] = useState(null);
  //DEFAULT COLUMNS OF GRID
  const columnDefs = useColumnDefs(type);

  //DATA OF GRID
  // const location = useLocation();
  // const rowData = useGetData(location.pathname);
  // const rowData = useMemo(() => state, [state]);
  const rowData = useMemo(() => billingState, []);

  //GLOBAL STYLE OF GRID AND GRID WRAPPER
  const { containerStyle, gridStyle } = useGridStyle();

  //DEFAULT ROW STYLE
  const rowStyle = { background: '' };

  //DEFAULT COL DEF
  const defaultColDef = useDefaultColDef(colDef);

  //FUNCTION THAN SET GRID API WHEN GRID IS READY
  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
  }, []);

  // //SET LOADING VIEW
  const loadingOverlayComponent = useLoadingView(gridApi, isLoading);

  //SET EMPTY OR ERROR VIEW
  const { noRowsOverlayComponent, noRowsOverlayComponentParams } = useEmptyErrorView(error);

  const components = useMemo(() => {
    return {
      agColumnHeader: CustomHeader,
    };
  }, []);

  return (
    <GridApiContext value={gridApi}>
      <div style={containerStyle}>
        <HeaderControls type={type} />
        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            rowStyle={rowStyle}
            getRowStyle={HELPERS.getRowStyle}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowData={rowData}
            onGridReady={onGridReady}
            pagination={pagination}
            paginationPageSize={rowCount}
            noRowsOverlayComponentFramework={noRowsOverlayComponent}
            noRowsOverlayComponentParams={noRowsOverlayComponentParams}
            loadingOverlayComponentFramework={loadingOverlayComponent}
            rowSelection={rowSelection}
            animateRows={true}
            serverSideSortingAlwaysResets={true}
            rowDragManaged={true}
            rowDragEntireRow={true}
            rowDragMultiRow={true}
            suppressMovableColumns={false}
            suppressMoveWhenRowDragging={true}
            enableGroupEdit={true}
            frameworkComponents={components}
            suppressRowDeselection={true}
            fullWidthCellRendererFramework={CustomHeader}
          />
        </div>
      </div>
    </GridApiContext>
  );
};

GeneralGrid.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object).isRequired,
  pagination: PropTypes.bool,
  rowCount: PropTypes.number,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  //PARAMS DEFAULT COL DEF -> START
  colDef: PropTypes.shape({
    sortable: PropTypes.bool,
    resizable: PropTypes.bool,
    suppressMenu: PropTypes.bool,
  }),
  //PARAMS DEFAULT COL DEF -> END
  rowSelection: PropTypes.string,
  type: PropTypes.oneOf([GRID_TYPES.billing, GRID_TYPES.transactions, GRID_TYPES.casesToInvoice]).isRequired,
};
GeneralGrid.defaultProps = {
  state: [],
  rowCount: 10,
  rowSelection: 'multiply',
  colDef: {
    sortable: false,
    resizable: true,
    suppressMenu: true,
  },
};

export default GeneralGrid;
