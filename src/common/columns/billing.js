import { HELPERS } from '../../helpers/helpers';
import ButtonView from '../../components/buttons/button-view';
import ButtonSend from '../../components/buttons/button-send';
import ButtonPrint from '../../components/buttons/button-print';
import cellRenderer from '../../components/grid-cell-rerenderer/cellRenderer';
import cellRendererClient from '../../components/grid-cell-rerenderer/cellRendererClient';
import cellRendererGuarantor from '../../components/grid-cell-rerenderer/cellRendererGuarantor';
import cellRendererDue from '../../components/grid-cell-rerenderer/cellRendererDue';
import cellRendererStatus from '../../components/grid-cell-rerenderer/cellRendererStatus';
import cellRendererDispatch from '../../components/grid-cell-rerenderer/cellRendererDispatch';
import cellRendererCopy from '../../components/grid-cell-rerenderer/cellRendererCopy';
import React from 'react';
import { FILTER_TYPES } from '../../constants/filter-types';

const buttonColumnWidth = HELPERS.convertRemToPx(4.8);

export const billingColumns = [
  {
    field: 'checkbox',
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    suppressMenu: true,
    resizable: false,
    maxWidth: 48,
  },
  // { ...FILTER_TYPES.filterNumber('uid'), maxWidth: 60 },
  { ...FILTER_TYPES.filterNumber('number'), headerName: 'No.' },
  { ...FILTER_TYPES.filterDate('creation', cellRenderer), headerName: 'Created' },
  { ...FILTER_TYPES.filterText('client', cellRendererClient, true), headerName: 'Customer' },
  {
    field: 'guarantor',
    headerName: 'Debtor',
    cellRendererFramework: cellRendererGuarantor,
    filter: 'guarantorFilter',
    filterParams: {
      values: ["Office de l'assurance...", 'Office de Katarina...', 'Office de population...', 'Office de Anton...'],
      typeValues: ['all', 'tg', 'tp'],
    },
  },
  { ...FILTER_TYPES.filterText('provider', cellRenderer) },
  { ...FILTER_TYPES.filterNumber('total'), maxWidth: 80 },
  { ...FILTER_TYPES.filterNumber('paid'), maxWidth: 80 },
  { ...FILTER_TYPES.filterNumber('open'), maxWidth: 80 },
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
  { ...FILTER_TYPES.filterDate('due', cellRendererDue), minWidth: 130 },
  // { ...FILTER_TYPES.filterText('guarantor', cellRendererGuarantor, true), minWidth: 180 },
  {
    field: 'sent',
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
    headerName: '',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonView,
    resizable: false,
    suppressMenu: true,
  },
  {
    field: 'btn-send',
    headerName: '',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonSend,
    resizable: false,
    suppressMenu: true,
  },
  {
    field: 'btn-print',
    headerName: '',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonPrint,
    resizable: false,
    suppressMenu: true,
  },
];
