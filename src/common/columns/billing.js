import { HELPERS } from '../../helpers/helpers';
import ButtonView from '../../components/buttons/button-view';
import ButtonSend from '../../components/buttons/button-send';
import ButtonPrint from '../../components/buttons/button-print';
import cellRenderer from '../../components/renderer/cellRenderer';
import cellRendererClient from '../../components/renderer/cellRendererClient';
import cellRendererGuarantor from '../../components/renderer/cellRendererGuarantor';
import cellRendererDue from '../../components/renderer/cellRendererDue';
import cellRendererStatus from '../../components/renderer/cellRendererStatus';
import cellRendererDispatch from '../../components/renderer/cellRendererDispatch';
import cellRendererCopy from '../../components/renderer/cellRendererCopy';

const buttonColumnWidth = HELPERS.convertRemToPx(4.8);

export const billingColumns = [
  { field: 'uid', cellRendererFramework: cellRenderer },
  { field: 'number', cellRendererFramework: cellRenderer },
  {
    field: 'client',
    cellRendererFramework: cellRendererClient,
    filter: false,
  },
  {
    field: 'guarantor',
    cellRendererFramework: cellRendererGuarantor,
    filter: false,
  },
  { field: 'provider', cellRendererFramework: cellRenderer },
  { field: 'total', cellRendererFramework: cellRenderer },
  { field: 'open', cellRendererFramework: cellRenderer },
  { field: 'creation', cellRendererFramework: cellRenderer },
  { field: 'due', cellRendererFramework: cellRendererDue },
  {
    field: 'status',
    cellRendererFramework: cellRendererStatus,
    filter: 'agSetColumnFilter',
    keyCreator: (params) => {
      return params.value.name;
    },
    filterParams: {
      values: ['paid', 'unpaid', 'cancelled'],
    },
  },
  { field: 'dispatch', cellRendererFramework: cellRendererDispatch },
  {
    field: 'copy',
    cellRendererFramework: cellRendererCopy,
    filter: 'agSetColumnFilter',
    keyCreator: (params) => {
      return params.value.name;
    },
    filterParams: {
      values: ['sent', 'not-sent', 'error'],
    },
  },
  {
    field: 'btn-view',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonView,
    resizable: false,
    suppressMenu: true,
  },
  {
    field: 'btn-send',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonSend,
    resizable: false,
    suppressMenu: true,
  },
  {
    field: 'btn-print',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonPrint,
    resizable: false,
    suppressMenu: true,
  },
  {
    field: 'checkbox',
    checkboxSelection: true,
    suppressMenu: true,
  },
];
