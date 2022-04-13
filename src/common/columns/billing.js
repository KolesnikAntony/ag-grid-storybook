import { HELPERS } from '../../helpers/helpers';
import ButtonView from '../../components/buttons/button-view';
import ButtonSend from '../../components/buttons/button-send';
import ButtonPrint from '../../components/buttons/button-print';
import cellRenderer from '../../components/renderer/cellRenderer';
import cellRendererClient from '../../components/renderer/cellRendererClient';
import cellRendererGuarantor from '../../components/renderer/cellRendererGuarantor';
import cellRendererDue from '../../components/renderer/cellRendererDue';
import cellRendererStatus from '../../components/renderer/cellRendererStatus';

const buttonColumnWidth = HELPERS.convertRemToPx(4.8);

export const billingColumns = [
  { field: 'uid', cellRendererFramework: cellRenderer },
  { field: 'number' },
  { field: 'client', cellRendererFramework: cellRendererClient },
  { field: 'guarantor', cellRendererFramework: cellRendererGuarantor },
  { field: 'provider' },
  { field: 'total' },
  { field: 'open' },
  { field: 'creation' },
  { field: 'due', cellRendererFramework: cellRendererDue },
  { field: 'status', cellRendererFramework: cellRendererStatus },
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
