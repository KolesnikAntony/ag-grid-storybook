import { FILTER_TYPES } from './../../constants/filter-types';
import cellRenderer from '../../components/grid-cell-rerenderer/cellRenderer';
import cellRendererOperation from '../../components/grid-cell-rerenderer/cellRendererOperation';
import cellRendererReferenceNumber from '../../components/grid-cell-rerenderer/cellRendererReferenceNumber';
import cellRendererDebitor from '../../components/grid-cell-rerenderer/cellRendererDebitor';
import cellRendererAllocation from '../../components/grid-cell-rerenderer/cellRendererAllocation';
import ButtonView from '../../components/buttons/button-view';

export const transactionsColumns = [
  { ...FILTER_TYPES.filterNumber('uid') },
  { ...FILTER_TYPES.filterText('operation', cellRendererOperation) },
  { ...FILTER_TYPES.filterText('method', cellRenderer) },
  { ...FILTER_TYPES.filterText('reference_number', cellRendererReferenceNumber), headerName: 'Reference number' },
  { ...FILTER_TYPES.filterNumber('amount') },
  { ...FILTER_TYPES.filterDate('value_date', cellRenderer), headerName: 'Value date' },
  { ...FILTER_TYPES.filterText('debitor', cellRendererDebitor) },
  { ...FILTER_TYPES.filterText('patient', cellRenderer) },
  { ...FILTER_TYPES.filterText('allocation', cellRendererAllocation) },
  {
    field: 'see_transaction',
    headerName: ' ',
    cellRendererFramework: ButtonView,
    resizable: false,
    suppressMenu: true,
  },
];
