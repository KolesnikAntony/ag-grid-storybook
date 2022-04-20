import { HELPERS } from '../../helpers/helpers';
import ButtonIcon from '../../components/buttons/button-icon';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ButtonRemove from "../../components/buttons/button-remove";

const buttonColumnWidth = HELPERS.convertRemToPx(1.8);
const ButtonIconInfo = () => <ButtonIcon><InfoIcon /></ButtonIcon>;
const ButtonIconEdit = () => <ButtonIcon><EditIcon /></ButtonIcon>;
const ButtonIconRemove = () => <ButtonIcon><DeleteOutlineIcon /></ButtonIcon>;

export const createInvoiceColumns = [
  { field: 'tariff_type', displayName: 'Rate' },
  { field: 'code', displayName: 'Code' },
  { field: 'ref_code', displayName: 'Reference' },
  { field: 'name', displayName: 'Description' },
  { field: 'quantity', displayName: 'Quantity', editable: true },
  { field: 'unit_mt', displayName: 'Price' },
  {
    field: 'btn-info',
    displayName: ' ',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonIconInfo,
    resizable: false,
    suppressMenu: true,
  },
  {
    field: 'btn-send',
    displayName: ' ',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonIconEdit,
    resizable: false,
    suppressMenu: true,
  },
  {
    field: 'btn-remove',
    displayName: ' ',
    maxWidth: buttonColumnWidth,
    cellRendererFramework: ButtonRemove,
    resizable: false,
    suppressMenu: true,
  },
];
