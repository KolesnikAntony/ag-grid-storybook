import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Loading from './loading';
import PropTypes from 'prop-types';

const Grid = (props) => {
  const { pagination, rowCount, isLoading, isError, isAuth, isEmpty } = props;

  const containerStyle = useMemo(() => ({ width: '100%', height: '800px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  const [columnDefs] = useState([
    { field: 'id' },
    { field: 'athlete', width: 150 },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ]);
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

  const loadingCellRenderer = useMemo(() => {
    return Loading;
  }, []);

  const loadingCellRendererParams = useMemo(() => {
    return {
      loadingMessage: 'One moment please...',
    };
  }, []);

  const onGridReady = useCallback((params) => {
    // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     // add id to data
    //     let idSequence = 0;
    //     data.forEach((item) => {
    //       item.id = idSequence++;
    //     });
    //     const server = getFakeServer(data);
    //     const datasource = getServerSideDatasource(server);
    //     params.api.setServerSideDatasource(datasource);
    //   });
  }, []);

  const loadingCellRendererSelector = (params) => {
    console.log(params, '---selector');
    const useCustomRenderer = true;
    if (useCustomRenderer) {
      return {
        component: Loading,
        params: {
          // parameters to supply to the custom loading cell renderer
          loadingMessage: '--- CUSTOM ERROR MESSAGE ---',
        },
      };
    } else {
      // no loading cell renderer
      return undefined;
    }
  };

  return (
    <div style={containerStyle}>
      <div style={{ height: '100%', paddingTop: '25px', boxSizing: 'border-box' }}>
        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            loadingCellRenderer={loadingCellRenderer}
            loadingCellRendererParams={loadingCellRendererParams}
            // loadingCellRendererSelector={loadingCellRendererSelector}
            // suppressLoadingOverlay={true}
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
