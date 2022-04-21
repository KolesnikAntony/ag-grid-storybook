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
import { FILTER_TYPES } from './../../constants/filter-types';

const buttonColumnWidth = HELPERS.convertRemToPx(4.8);

export const billingColumns = [
  { ...FILTER_TYPES.filterNumber('uid'), maxWidth: 60 },
  { ...FILTER_TYPES.filterNumber('number') },
  { ...FILTER_TYPES.filterText('client', cellRendererClient, true) },
  { ...FILTER_TYPES.filterText('guarantor', cellRendererGuarantor, true), minWidth: 180 },
  { ...FILTER_TYPES.filterText('provider', cellRenderer) },
  { ...FILTER_TYPES.filterNumber('total'), maxWidth: 80 },
  { ...FILTER_TYPES.filterNumber('open'), maxWidth: 80 },
  { ...FILTER_TYPES.filterDate('creation', cellRenderer) },
  { ...FILTER_TYPES.filterDate('due', cellRendererDue), minWidth: 130 },
  {
    field: 'status',
    cellRendererFramework: cellRendererStatus,
    filter: 'agSetColumnFilter',
    keyCreator: (params) => {
      return params.value.name;
    },
    filterParams: {
      values: [
        'paid',
        'unpaid',
        'partially-paid',
        'cancelled',
        'draft',
        'normal-status',
        '1st-reminder',
        '2nd-reminder',
        '3rd-reminder',
        'formal-notice',
        'pursuit',
      ],
    },
    minWidth: 130,
  },
  {
    field: 'dispatch',
    cellRendererFramework: cellRendererDispatch,
    filterParams: {
      values: ['sent', 'not-sent', 'error', 'flagged', 'not-flagged'],
    },
    maxWidth: 80,
  },
  {
    field: 'copy',
    cellRendererFramework: cellRendererCopy,
    filter: 'agSetColumnFilter',
    keyCreator: (params) => {
      return params.value.name;
    },
    filterParams: {
      values: ['sent', 'not-sent'],
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
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    suppressMenu: true,
    resizable: false,
    maxWidth: 48,
  },
];
