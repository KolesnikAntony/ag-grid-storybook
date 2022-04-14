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
import filterCellRerenderCopy from '../../components/renderer/filterCellRerenderCopy';

const buttonColumnWidth = HELPERS.convertRemToPx(4.8);

export const billingColumns = [
  { field: 'uid', cellRendererFramework: cellRenderer },
  { field: 'number', cellRendererFramework: cellRenderer },
  {
    field: 'client',
    cellRendererFramework: cellRendererClient,
    filter: 'agSetColumnFilter',
    filterParams: {
      valueGetter: (params) => {
        return params.data.client.name;
      },
    },
  },
  {
    field: 'guarantor',
    cellRendererFramework: cellRendererGuarantor,
    filter: 'agSetColumnFilter',
    filterParams: {
      valueGetter: (params) => {
        return params.data.guarantor.name;
      },
    },
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
    filterParams: {
      valueGetter: (params) => {
        return params.data.status.name;
      },
    },
  },
  { field: 'dispatch', cellRendererFramework: cellRendererDispatch },
  {
    field: 'copy',
    cellRendererFramework: cellRendererCopy,
    filter: 'agSetColumnFilter',
    filterParams: {
      values: ['sent', 'not-sent', 'error'],
      // valueGetter: (params) => {
      //   return params.data.copy.name;
      // },
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
