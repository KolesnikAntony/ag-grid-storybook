import { FILTER_TYPES } from './../../constants/filter-types';
import cellRenderer from '../../components/renderer/cellRenderer';
import ButtonIconInfo from '../../components/buttons/button-icon';
import cellRendererGuarantor from '../../components/renderer/cellRendererGuarantor';
import cellRendererServicesToInvoice from '../../components/renderer/cellRendererServicesToInvoice';

export const transactionsColumns = [
  // { ...FILTER_TYPES.filterNumber('uid') },
  // { ...FILTER_TYPES.filterNumber('case_number'), displayName: 'case number' },
  // { ...FILTER_TYPES.filterText('title', cellRenderer) },
  // { ...FILTER_TYPES.filterDate('last_service_date', cellRenderer), displayName: 'last service date' },
  // { ...FILTER_TYPES.filterText('patient', cellRenderer) },
  // { ...FILTER_TYPES.filterText('guarantor', cellRendererGuarantor, true) },
  // { ...FILTER_TYPES.filterText('provider', cellRenderer) },
  // {
  //   ...FILTER_TYPES.filterText('services_to_invoice', cellRendererServicesToInvoice, true),
  //   displayName: 'services to invoice',
  //   filterParams: {
  //     values: [
  //       'Medical consultation',
  //       'Non-medical consultation ',
  //       'Medical external visit',
  //       'Consultation in the absence of the patient',
  //     ],
  //   },
  // },
  // { ...FILTER_TYPES.filterNumber('amount') },
  // {
  //   field: 'create_invoice',
  //   displayName: ' ',
  //   cellRendererFramework: ButtonIconInfo,
  //   resizable: false,
  //   suppressMenu: true,
  // },
];
