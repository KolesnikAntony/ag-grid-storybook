import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import PropTypes from 'prop-types';
import { temp } from '../api';

const Grid = (props) => {
  const { pagination, rowCount, isLoading, isEmpty } = props;
  console.log(pagination);

  const containerStyle = useMemo(() => ({ width: '100%', height: '600px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  const columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

  const data = useMemo(() => temp, []);
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    if (!isEmpty) {
      setRowData(data);
    }
  }, [isEmpty, data]);

  useEffect(() => {
    if (gridApi) {
      console.log(gridApi);
      isLoading && gridApi.showLoadingOverlay();
    }
  }, [gridApi, isLoading]);

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

  return (
    <div style={containerStyle}>
      <div style={{ height: '100%', paddingTop: '25px', boxSizing: 'border-box' }}>
        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowData={rowData}
            // suppressLoadingOverlay={true}
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
  isEmpty: PropTypes.bool,
  // isError: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  // isAuth: PropTypes.bool,
};

// Grid.defaultProps = {
//   pagination: true,
//   rowCount: 10,
//   isLoading: false,
//   isError: null,
//   isAuth: true,
//   isEmpty: false,
// };

export default Grid;
