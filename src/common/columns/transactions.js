import { FILTER_TYPES } from './../../constants/filter-types';
import cellRenderer from '../../components/renderer/cellRenderer';
import cellRendererOperation from '../../components/renderer/cellRendererOperation';
import cellRendererReferenceNumber from '../../components/renderer/cellRendererReferenceNumber';
import ButtonView from '../../components/buttons/button-view';

export const transactionsColumns = [
  { ...FILTER_TYPES.filterNumber('uid') },
  { ...FILTER_TYPES.filterText('operation', cellRendererOperation) },
  { ...FILTER_TYPES.filterText('method', cellRenderer) },
  { ...FILTER_TYPES.filterText('reference_number', cellRendererReferenceNumber), headerName: 'Reference number' },
  { ...FILTER_TYPES.filterNumber('amount') },
  { ...FILTER_TYPES.filterDate('value_date', cellRenderer), headerName: 'Value date' },
  { ...FILTER_TYPES.filterText('debitor', cellRenderer) },
  { ...FILTER_TYPES.filterText('patient', cellRenderer) },
  { ...FILTER_TYPES.filterText('allocation', cellRenderer) },
  {
    field: 'see_transaction',
    headerName: ' ',
    cellRendererFramework: ButtonView,
    resizable: false,
    suppressMenu: true,
  },
];
