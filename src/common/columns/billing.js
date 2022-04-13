import cellRenderer from '../../components/renderer/cellRenderer';
import { HELPERS } from '../../helpers/helpers';
import ButtonView from '../../components/buttons/button-view';
import ButtonSend from '../../components/buttons/button-send';
import ButtonPrint from '../../components/buttons/button-print';

const buttonColumnWidth = HELPERS.convertRemToPx(4.8);

export const billingColumns = [
  { field: 'uid', cellRendererFramework: cellRenderer },
  { field: 'number' },
  { field: 'client' },
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
    cellRendererFramework: ButtonView,
    resizable: false,
  },
  {
    field: 'btn-send',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonSend,
    resizable: false,
  },
  {
    field: 'btn-print',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonPrint,
    resizable: false,
  },
  {
    field: 'checkbox',
    checkboxSelection: true,
    resizable: false,
  },
];
