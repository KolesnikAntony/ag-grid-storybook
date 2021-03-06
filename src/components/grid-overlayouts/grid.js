import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import PropTypes from 'prop-types';
import GridLoading from './gridLoading';
import GridEmpty from './gridEmpty';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import CalculateIcon from '@mui/icons-material/Calculate';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import cellRenderer from '../grid-cell-rerenderer/cellRenderer';

const Grid = (props) => {
  const { state, pagination, rowCount, isLoading, error, isSortable, isResizable, isFilterMenu, rowSelection } = props;

  const containerStyle = useMemo(() => ({ width: '100%', height: '300px' }), []);
  const gridStyle = useMemo(() => ({ height: 'calc(100% - 40px)', width: '100%' }), []);

  const columnDefs = [
    {
      field: 'id',
      filter: 'agNumberColumnFilter',
      filterParams: { buttons: ['reset', 'apply'], suppressAndOrCondition: true },
      cellRendererFramework: cellRenderer,
    },
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    {
      field: 'date',
      filter: 'agDateColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
        suppressAndOrCondition: true,
        comparator: function (filterLocalDateAtMidnight, cellValue) {
          var dateAsString = cellValue;
          if (dateAsString == null) return -1;
          var dateParts = dateAsString.split('/');
          var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));

          if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
          }

          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }

          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
        browserDatePicker: true,
      },
    },
  ];

  const [rowData, setRowData] = useState(state);

  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    if (gridApi) {
      isLoading && setTimeout(() => gridApi.showLoadingOverlay());
    }
  }, [isLoading, gridApi]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      filter: true,
      editable: true,
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

  const [past, setPast] = useState(null);
  const [price, setPrice] = useState(null);

  const handleCopy = () => {
    const selectedRow = gridApi?.getSelectedRows();
    if (selectedRow.length) {
      const copiedState = selectedRow.map((el) => ({ ...el, isUpdated: true, id: Math.ceil(Math.random() * 1001) }));
      setPast(copiedState);
    } else {
      setPast(null);
      alert('No selected rows');
    }
  };
  const handlePast = () => {
    if (past) {
      const newState = [...past, ...rowData];
      setRowData(newState);
    } else {
      alert('Buffer is empty');
    }
    setPast(null);
  };
  const handleDelete = () => {
    const selectedRow = gridApi.getSelectedRows();
    const deletedIds = selectedRow.map((el) => el.id);
    const newState = rowData.map((el) => {
      if (deletedIds.includes(el.id)) {
        return { ...el, isDeleted: true };
      } else {
        return el;
      }
    });
    setRowData(newState);
  };
  const handleCalc = () => {
    const selectedRow = gridApi.getSelectedRows();
    if (selectedRow.length) {
      const totalArray = selectedRow.map((el) => el.price);
      const sum = totalArray.reduce((a, b) => a + b);
      setPrice(sum);
    } else {
      alert('Pleas select row');
      setPrice(null);
    }
  };

  const handleClear = () => {
    setPrice(null);
  };

  // const [filterState, setFilterState] = useState(true);
  // useEffect(() => {}, [filterState]);

  let savedFilterModel = null;

  const resetFilters = () => {
    gridApi.setFilterModel(null);
    savedFilterModel = null;
  };

  const toggleFilters = () => {
    if (Object.keys(gridApi.getFilterModel()).length !== 0) {
      savedFilterModel = gridApi.getFilterModel();
      // setFilterState(false);
      gridApi.setFilterModel(null);
    } else {
      gridApi.setFilterModel(savedFilterModel);
    }
  };

  // const getFilters = () => {
  //   gridApi.getFilterModel();
  // }

  // gridApi?.onFilterChanged(() => {
  //   console.log('I')
  // });

  return (
    <div style={containerStyle}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button
          startIcon={<FilterAltOffIcon />}
          onClick={resetFilters}
          // disabled={filterState}
        >
          Reset filters
        </Button>

        <Button
          startIcon={<FilterAltIcon />}
          onClick={toggleFilters}
          // disabled={filterState}
        >
          Toggle filters
        </Button>
        <Button startIcon={<ContentCopyIcon />} onClick={handleCopy}>
          Copy row
        </Button>
        <Button startIcon={<ContentPasteIcon />} onClick={handlePast}>
          Past row
        </Button>
        <Button startIcon={<DeleteIcon />} onClick={handleDelete}>
          Delete row
        </Button>
        <Button startIcon={<CalculateIcon />} onClick={handleCalc}>
          Calc price
        </Button>
        {price && (
          <>
            <Typography>Sum of price : {price}</Typography>
            <Button startIcon={<ClearIcon />} onClick={handleClear}>
              Clear
            </Button>
          </>
        )}
      </Stack>
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
          // rowMultiSelectWithClick={true}
          // suppressRowClickSelection={false}
          // onSelectionChanged={onSelectionChanged}
          // suppressClickEdit={true}
          // suppressCellSelection={true}
          rowDragManaged={true}
          rowDragEntireRow={true}
          rowDragMultiRow={true}
          suppressMovableColumns={false}
          suppressMoveWhenRowDragging={true}
          // suppressColumnMoveAnimation={true}
          enableGroupEdit={true}
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
};

Grid.defaultProps = {
  state: [],
  rowCount: 10,
  rowSelection: 'multiply',
  isFilterMenu: true,
};

export default Grid;
