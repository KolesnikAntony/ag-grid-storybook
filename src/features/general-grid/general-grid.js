import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import 'ag-grid-enterprise';
import { GRID_TYPES } from '../../constants/grid-types';
import { AgGridReact } from 'ag-grid-react';
import { HELPERS } from '../../helpers/helpers';
import { useGridStyle } from '../../hooks/grid/useGridStyle';
import { useDefaultColDef } from '../../hooks/grid/useDefaultColDef';
import { useEmptyErrorView } from '../../hooks/grid/useEmptyErrorView';
import HeaderControls from '../../components/general-grid/grid-controls-header/header-controls';
import { GridApiContext } from '../../context/GridApiContext';
import CustomHeader from '../../components/general-grid/grid-custom-header/custom-header';
import GridToolbarFilter from '../../components/general-grid/grid-toolbar-filter/grid-toolbar-filter';
import { StoreProvider } from '../../store/store';
import FiltersControlFeatures from '../new-tab-feature/filters-control-features';
import GridSelectedControls from '../../components/general-grid/grid-selected-controls/grid-selected-controls';
import { Collapse } from '@mui/material';
import cellRenderer from '../../components/grid-cell-rerenderer/cellRenderer';
import GridLoading from '../../components/grid-overlayouts/gridLoading';
import { billingDemi } from '../../../mock-server/demi';

const GeneralGrid = ({ type, colDef, getServerData, error, rowSelection }) => {
  //GRID API
  const refGrid = useRef(null);

  const [columnDefs, setColumnDefs] = useState([]);

  //GLOBAL STYLE OF GRID AND GRID WRAPPER
  const { containerStyle, gridStyle } = useGridStyle();

  //DEFAULT ROW STYLE
  const rowStyle = { background: '' };

  //DEFAULT COL DEF
  const defaultColDef = useDefaultColDef(colDef);

  const getFilter = (type) => {
    switch (type) {
      case 'text':
        return 'agTextColumnFilter';
      case 'number':
        return 'agNumberColumnFilter';
      case 'date':
        return 'agDateColumnFilter';
      default:
        return 'agSetColumnFilter';
    }
  };

  const transformer = useCallback((titles) => {
    return titles
      .map((value) => {
        return (
          value.key !== 'id' && {
            field: value.key,
            cellRendererFramework: cellRenderer,
            keyCreator: (params) => {
              return params.value.value;
            },
            filter: getFilter(value.type),
            filterParams: {
              values: value.variation,
            },
          }
        );
      })
      .filter((el) => el);
  }, []);

  const getColumnDefs = (array) => {
    const uniqKeys = [];
    const fields = [];
    array.forEach((obj) => {
      const keys = Object.keys(obj);
      keys.forEach((key) => {
        if (uniqKeys.indexOf(key) === -1) {
          uniqKeys.push(key);
          fields.push({
            key,
            type: obj[key]?.type,
            variation: obj[key]?.variation,
          });
        }
      });
    });
    return transformer(fields);
  };

  const dataSort = {
    getRows: (params) => {
      const { filterModel } = params.request;
      params.api.showLoadingOverlay();
      getServerData(filterModel)
        .then((res) => {
          if (res.length) {
            const defs = getColumnDefs(res);
            setColumnDefs(defs);
          } else {
            params.api.showNoRowsOverlay();
          }
          params.successCallback(res, res.length);
        })
        .catch(() => params.failCallback());
    },
  };

  //FUNCTION THAN SET GRID API WHEN GRID IS READY
  const onGridReady = (params) => {
    const { api } = params;
    api.setServerSideDatasource(dataSort);
  };

  //SET EMPTY OR ERROR VIEW
  const { noRowsOverlayComponent, noRowsOverlayComponentParams } = useEmptyErrorView(error);

  //CUSTOM COMPONENTS FOR AG GRID
  const components = useMemo(() => {
    return {
      agColumnHeader: CustomHeader,
      gridToolbarFilter: GridToolbarFilter,
      customTab: FiltersControlFeatures,
    };
  }, []);

  const [count, setCount] = useState(0);

  const onSelectionChanged = (event) => {
    const count = event.api.getSelectedNodes().length;
    setCount(count);
  };

  //COLUMNS STATE , WORK WITH LOCAL STORAGE

  const handleColumnAction = useCallback((params) => {
    const columnState = JSON.stringify(params.columnApi.getColumnState());
    localStorage.setItem('BILLING_COLUMNS_STATE', columnState);
  }, []);

  useEffect(() => {
    const setter = () => {
      const columnState = JSON.parse(localStorage.getItem('BILLING_COLUMNS_STATE'));
      if (columnState) {
        const f = refGrid.current?.columnApi.applyColumnState({ state: columnState, applyOrder: true });
        console.log('fafaf', f);
      }
    };

    columnDefs.length && setTimeout(setter, 0);
  }, [columnDefs]);

  return (
    <GridApiContext value={{ gridApi: refGrid.current?.api, type }}>
      <StoreProvider>
        <div style={containerStyle}>
          <HeaderControls />
          <Collapse in={!!count}>
            <GridSelectedControls rowCount={count} />
          </Collapse>
          <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact
              ref={refGrid}
              key={type}
              frameworkComponents={components}
              rowModelType={'serverSide'}
              serverSideStoreType={'partial'}
              // rowData={[]}
              // onFirstDataRendered={onFirstDataRendered}
              rowStyle={rowStyle}
              getRowStyle={HELPERS.getRowStyle}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              onGridReady={onGridReady}
              onSelectionChanged={onSelectionChanged}
              pagination={true}
              paginationPageSize={11}
              rowHeight={42}
              onColumnVisible={handleColumnAction}
              onColumnMoved={handleColumnAction}
              noRowsOverlayComponentFramework={noRowsOverlayComponent}
              noRowsOverlayComponentParams={noRowsOverlayComponentParams}
              // loadingCellRendererFramework={false}
              loadingOverlayComponentFramework={GridLoading}
              rowSelection={rowSelection}
              ///////////
              // enableServerSideFilter={true}
              // serverSideStoreType={'partial'}
              animateRows={true}
              // serverSideSortingAlwaysResets={true}
              rowDragManaged={true}
              rowDragEntireRow={true}
              rowDragMultiRow={true}
              suppressMovableColumns={false}
              suppressMoveWhenRowDragging={true}
              enableGroupEdit={true}
              suppressRowClickSelection={true}
              sideBar={{
                toolPanels: [
                  // {
                  //   id: 'custom-sidebar',
                  //   labelDefault: 'Custom sidebar',
                  //   labelKey: 'custom-sidebar',
                  //   iconKey: 'filter',
                  //   toolPanel: 'gridToolbarFilter',
                  //   toolPanelParams: {
                  //     columnDefs,
                  //     gridApi: refGrid.current?.api,
                  //   },
                  // },
                  {
                    id: 'columns',
                    labelDefault: 'Columns',
                    labelKey: 'columns',
                    iconKey: 'columns',
                    toolPanel: 'agColumnsToolPanel',
                    toolPanelParams: {
                      suppressRowGroups: true,
                      suppressValues: true,
                      suppressPivots: true,
                      suppressPivotMode: true,
                      suppressColumnFilter: true,
                      suppressColumnSelectAll: true,
                      suppressColumnExpandAll: true,
                    },
                  },
                  {
                    id: 'custom-tab',
                    labelDefault: 'Custom tab',
                    labelKey: 'custom-tab',
                    toolPanel: 'customTab',
                    toolPanelParams: {
                      columnDefs,
                      gridApi: refGrid.current?.api,
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
  getServerData: async () => billingDemi(),
};

export default GeneralGrid;
