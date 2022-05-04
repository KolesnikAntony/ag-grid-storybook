import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { GRID_TYPES } from '../../constants/grid-types';
import { useColumnDefs } from '../../hooks/grid/useColumnDefs';
import { AgGridReact } from 'ag-grid-react';
import { HELPERS } from '../../helpers/helpers';
import { useGridStyle } from '../../hooks/grid/useGridStyle';
import { useDefaultColDef } from '../../hooks/grid/useDefaultColDef';
import { useLoadingView } from '../../hooks/grid/useLoadingView';
import { useEmptyErrorView } from '../../hooks/grid/useEmptyErrorView';
import HeaderControls from '../../components/general-grid/grid-controls-header/header-controls';
import { GridApiContext } from '../../context/GridApiContext';
import CustomHeader from '../../components/general-grid/grid-custom-header/custom-header';
import GridToolbarFilter from '../../components/general-grid/grid-toolbar-filter/grid-toolbar-filter';
import { StoreProvider } from '../../store/store';
import FiltersControlFeatures from '../new-tab-feature/filters-control-features';
import GuarantorFilter from '../../components/general-grid/grid-filters/guarantor-filter';

const GeneralGrid = ({ type, colDef, pagination, rowCount, error, isLoading, rowSelection }) => {
  //GRID API
  const [gridApi, setGridApi] = useState(null);
  //DEFAULT COLUMNS OF GRID
  const [columnDefs, rowData] = useColumnDefs(type);

  //GLOBAL STYLE OF GRID AND GRID WRAPPER
  const { containerStyle, gridStyle } = useGridStyle();

  //DEFAULT ROW STYLE
  const rowStyle = { background: '' };

  //DEFAULT COL DEF
  const defaultColDef = useDefaultColDef(colDef);

  //FUNCTION THAN SET GRID API WHEN GRID IS READY
  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
    params.api.getFilterInstance('guarantor');
  }, []);

  // //SET LOADING VIEW
  const loadingOverlayComponent = useLoadingView(gridApi, isLoading);

  //SET EMPTY OR ERROR VIEW
  const { noRowsOverlayComponent, noRowsOverlayComponentParams } = useEmptyErrorView(error);

  //CUSTOM COMPONENTS FOR AG GRID
  const components = useMemo(() => {
    return {
      agColumnHeader: CustomHeader,
      gridToolbarFilter: GridToolbarFilter,
      customTab: FiltersControlFeatures,
      guarantorFilter: GuarantorFilter,
    };
  }, []);

  return (
    <GridApiContext value={{ gridApi, type }}>
      <StoreProvider>
        <div style={containerStyle}>
          <HeaderControls />
          <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact
              key={type}
              rowStyle={rowStyle}
              getRowStyle={HELPERS.getRowStyle}
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
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
              suppressRowClickSelection={true}
              sideBar={{
                toolPanels: [
                  {
                    id: 'custom-sidebar',
                    labelDefault: 'Custom sidebar',
                    labelKey: 'custom-sidebar',
                    iconKey: 'filter',
                    toolPanel: 'gridToolbarFilter',
                    toolPanelParams: {
                      columnDefs,
                      gridApi,
                    },
                  },
                  {
                    id: 'custom-tab',
                    labelDefault: 'Custom tab',
                    labelKey: 'custom-tab',
                    toolPanel: 'customTab',
                    toolPanelParams: {
                      columnDefs,
                      gridApi,
                    },
                  },
                ],
                defaultToolPanel: '',
              }}
            />
          </div>
        </div>
      </StoreProvider>
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
  rowSelection: 'multiple',
  colDef: {
    sortable: false,
    resizable: true,
    suppressMenu: false,
  },
};

export default GeneralGrid;
