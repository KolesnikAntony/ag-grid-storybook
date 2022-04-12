import cellRenderer from '../../components/renderer/cellRenderer';
import { HELPERS } from '../../helpers/helpers';

const buttonColumnWidth = HELPERS.convertRemToPx(5);

export const billingColumns = [
  { field: 'uid', cellRendererFramework: cellRenderer },
  { field: 'number' },
  { field: 'client',  },
  { field: 'guarantor' },
  { field: 'provider' },
  { field: 'total' },
  { field: 'open' },
  { field: 'creation' },
  { field: 'due' },
  { field: 'status' },
  { field: 'dispatch' },
  { field: 'copy' },
  {
    field: 'btn-view',
    maxWidth: buttonColumnWidth,
  },
  {
    field: 'btn-send',
    maxWidth: buttonColumnWidth,
  },
  {
    field: 'btn-print',
    maxWidth: buttonColumnWidth,
  },
  {
    field: 'checkbox',
    checkboxSelection: true,
  },
];
