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

const FILTER_TYPES = {
  filterNumber: (field) => ({
    field,
    cellRendererFramework: cellRenderer,
    filter: 'agNumberColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
      suppressAndOrCondition: true,
    },
  }),
  filterText: (field, cellRender, isKeyCreator = false) => ({
    field,
    cellRendererFramework: cellRender,
    keyCreator: (params) => {
      return isKeyCreator ? params.value.name : params.value;
    },
  }),
  filterDate: (field, cellRenderer, separator = '.') => ({
    field,
    cellRendererFramework: cellRenderer,
    filter: 'agDateColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
      suppressAndOrCondition: true,
      comparator: function (filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        if (dateAsString == null) return -1;
        var dateParts = dateAsString.split(separator);
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
  }),
};

export const billingColumns = [
  { ...FILTER_TYPES.filterNumber('uid') },
  { ...FILTER_TYPES.filterNumber('number') },
  { ...FILTER_TYPES.filterText('client', cellRendererClient, true) },
  { ...FILTER_TYPES.filterText('guarantor', cellRendererGuarantor, true) },
  { ...FILTER_TYPES.filterText('provider', cellRenderer) },
  { ...FILTER_TYPES.filterNumber('total') },
  { ...FILTER_TYPES.filterNumber('open') },
  { ...FILTER_TYPES.filterDate('creation', cellRenderer) },
  { ...FILTER_TYPES.filterDate('due', cellRendererDue) },
  {
    field: 'status',
    cellRendererFramework: cellRendererStatus,
    filter: 'agSetColumnFilter',
    keyCreator: (params) => {
      return params.value.name;
    },
    filterParams: {
      values: ['paid', 'unpaid', 'partially-paid', 'cancelled', 'draft', 'normal-status', '1st-reminder', '2nd-reminder', '3rd-reminder', 'formal-notice', 'pursuit'],
    },
  },
  {
    field: 'dispatch',
    cellRendererFramework: cellRendererDispatch,
    filterParams: {
      values: ['sent', 'not-sent', 'error', 'flagged', 'not-flagged'],
    },
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
    checkboxSelection: true,
    suppressMenu: true,
  },
];
