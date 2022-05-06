import { HELPERS } from '../../helpers/helpers';
import ButtonIcon from '../../components/buttons/button-icon';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ButtonRemove from '../../components/buttons/button-remove';

const buttonColumnWidth = HELPERS.convertRemToPx(1.8);
const ButtonIconInfo = () => (
  <ButtonIcon>
    <InfoIcon />
  </ButtonIcon>
);
const ButtonIconEdit = () => (
  <ButtonIcon>
    <EditIcon />
  </ButtonIcon>
);
const ButtonIconRemove = () => (
  <ButtonIcon>
    <DeleteOutlineIcon />
  </ButtonIcon>
);

export const createInvoiceColumns = [
  { field: 'tariff_type', headerName: 'Rate' },
  { field: 'code', headerName: 'Code' },
  { field: 'ref_code', headerName: 'Reference' },
  { field: 'name', headerName: 'Description' },
  { field: 'quantity', headerName: 'Quantity', editable: true },
  { field: 'unit_mt', headerName: 'Price' },
  {
    field: 'btn-info',
    headerName: ' ',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonIconInfo,
    resizable: false,
    suppressMenu: true,
  },
  {
    field: 'btn-send',
    headerName: ' ',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonIconEdit,
    resizable: false,
    suppressMenu: true,
  },
  {
    field: 'btn-remove',
    headerName: ' ',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonRemove,
    resizable: false,
    suppressMenu: true,
    // this is needed to avoid toString=[object,object] result with objects
    // getQuickFilterText: function (params) {
    //   return getMedalString(params.value);
    // },
  },
];
