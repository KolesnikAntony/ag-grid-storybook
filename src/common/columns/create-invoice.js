import { HELPERS } from '../../helpers/helpers';

const buttonColumnWidth = HELPERS.convertRemToPx(1.8);
import ButtonView from '../../components/buttons/button-view';
import ButtonSend from '../../components/buttons/button-send';
import ButtonPrint from '../../components/buttons/button-print';

export const createInvoiceColumns = [
  { field: 'tariff_type', displayName: 'Rate' },
  { field: 'code', displayName: 'Code' },
  { field: 'ref_code', displayName: 'Reference' },
  { field: 'name', displayName: 'Description' },
  { field: 'quantity', displayName: 'Quantity', editable: true },
  { field: 'unit_mt', displayName: 'Price' },
  {
    field: 'btn-view',
    displayName: ' ',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonView,
    resizable: false,
    suppressMenu: true,
  },
  {
    field: 'btn-send',
    displayName: ' ',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonSend,
    resizable: false,
    suppressMenu: true,
  },
  {
    field: 'btn-print',
    displayName: ' ',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonPrint,
    resizable: false,
    suppressMenu: true,
  },
];
