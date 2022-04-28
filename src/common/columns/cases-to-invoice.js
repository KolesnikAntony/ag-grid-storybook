import { FILTER_TYPES } from './../../constants/filter-types';
import cellRenderer from '../../components/grid-cell-rerenderer/cellRenderer';
import ButtonCreateInvoice from '../../components/buttons/button-create-invoice';
import cellRendererGuarantor from '../../components/grid-cell-rerenderer/cellRendererGuarantor';
import cellRendererServicesToInvoice from '../../components/grid-cell-rerenderer/cellRendererServicesToInvoice';

export const casesToInvoiceColumns = [
  { ...FILTER_TYPES.filterNumber('uid') },
  { ...FILTER_TYPES.filterNumber('case_number'), headerName: 'Case number' },
  { ...FILTER_TYPES.filterText('title', cellRenderer) },
  { ...FILTER_TYPES.filterDate('last_service_date', cellRenderer), headerName: 'Last service date' },
  { ...FILTER_TYPES.filterText('patient', cellRenderer) },
  { ...FILTER_TYPES.filterText('guarantor', cellRendererGuarantor, true) },
  { ...FILTER_TYPES.filterText('provider', cellRenderer) },
  {
    ...FILTER_TYPES.filterText('services_to_invoice', cellRendererServicesToInvoice, true),
    headerName: 'Services to invoice',
    filterParams: {
      values: [
        'Medical consultation',
        'Non-medical consultation ',
        'Medical external visit',
        'Consultation in the absence of the patient',
      ],
    },
  },
  { ...FILTER_TYPES.filterNumber('amount') },
  {
    field: 'create_invoice',
    headerName: ' ',
    cellRendererFramework: ButtonCreateInvoice,
    resizable: false,
    suppressMenu: true,
  },
];
