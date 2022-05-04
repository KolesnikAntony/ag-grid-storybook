import React, { useContext } from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  Switch,
} from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import SelectPlusText from '../../components/general-grid/grid-toolbar-filter/custom-tab-controls/select-plus-text';
import TextControl from '../../components/general-grid/grid-form-controls/text-control';
import SearchIcon from '@mui/icons-material/Search';
import SelectControls from '../../components/general-grid/grid-form-controls/select-controls';
import { useYupValidationResolver } from '../../hooks/common/useValidationResolver';
import { customTabSchema } from './validation';
import { GridContext } from '../../context/GridApiContext';
import { useDispatch } from '../../store/store';
import { filterTabAC } from './action-creators/filter-tab-action-creaters';

const useStyle = () => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  search: {
    mb: 2,
  },
});

const customTabOptions = {
  text: [
    { value: 'equals', text: 'Equal to' },
    { value: 'lessThan', text: 'Less than' },
    { value: 'greaterThan', text: 'More than' },
  ],
  date: [
    { value: 'equals', text: 'Exact date' },
    { value: 'greaterThan', text: 'After date' },
    { value: 'lessThan', text: 'Before date' },
  ],
};

const getProperties = (type) => ({
  defaultSelect: customTabOptions[type][0].value,
  options: customTabOptions[type],
  type: type,
  placeholder: type === 'text' ? '41345' : '',
});

const doubleFieldFilter = [
  {
    label: 'UID',
    inputName: 'uid.filter',
    selectName: 'uid.type',
    ...getProperties('text'),
  },
  {
    label: 'Number',
    inputName: 'number.filter',
    selectName: 'number.type',
    ...getProperties('text'),
  },
  {
    label: 'Creation Date',
    inputName: 'creation.dateFrom',
    selectName: 'creation.type',
    ...getProperties('date'),
  },
  {
    label: 'Due Date',
    inputName: 'due.dateFrom',
    selectName: 'due.type',
    ...getProperties('date'),
  },
  {
    label: 'Sent Date',
    inputName: 'sent.dateFrom',
    selectName: 'sent.type',
    ...getProperties('date'),
  },
];

const total = {
  label: 'Total',
  inputName: 'total.filter',
  selectName: 'total.type',
  ...getProperties('text'),
};

const guarantors = [
  "Office de l'assurance...",
  'Office de Katarina...',
  'Office de population...',
  'Office de Anton...',
];
const cases = ['One', 'Two', 'Else', 'Lalalend'];

const statuses = [
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
];

const typeValues = ['all', 'tg', 'tp'];

const selectCommonProps = (defaultValue = '') => ({
  defaultValue,
  displayEmpty: true,
  inputProps: { 'aria-label': 'Without label' },
  variant: 'outlined',
});

const FiltersControlFeatures = () => {
  const sx = useStyle();
  const resolver = useYupValidationResolver(customTabSchema);
  const { formState, ...methods } = useForm({ resolver, mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const dispatch = useDispatch();
  const { gridApi } = useContext(GridContext);

  const handleModelCreator = (data) => {
    const { title, ...rest } = data;
    return {
      ...rest,
      status: rest.status.values.length ? rest.status.values : { values: null },
      guarantor: { ...rest.guarantor, values: rest.guarantor.values.length ? rest.guarantor.values : null },
      client: { type: 'contains', filter: rest.client.filter },
      provider: { type: 'contains', filter: rest.provider.filter },
    };
  };

  const handleApply = () => {
    const data = methods.getValues();
    const model = handleModelCreator(data);
    gridApi.setFilterModel(model);
  };

  const onSubmit = (formData) => {
    const { title, ...data } = formData;
    const model = handleModelCreator(data);
    const tab = {
      title,
      model,
      view: true,
    };
    methods.reset();
    dispatch(filterTabAC.addTab(tab));
  };

  return (
    <FormProvider {...methods} formState={formState}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box sx={sx.wrapper}>
          <TextControl sx={sx.search} title="Title" name={'title'} placeholder={'Name'} />
          <Divider sx={{ mb: 2, mt: 2 }} />
          <For each="el" of={doubleFieldFilter}>
            <SelectPlusText key={el.label} {...el} />
          </For>
          <Box>
            <FormControlLabel
              {...methods.register('sentControl')}
              control={<Switch defaultChecked={false} size="small" />}
              label="Sent"
              labelPlacement="start"
            />
          </Box>
          <Divider sx={{ mb: 2, mt: 2 }} />
          <TextControl
            sx={sx.search}
            title="Client"
            name={'client.filter'}
            placeholder={'Search'}
            icon={<SearchIcon />}
          />
          <SelectControls
            title="Guarantor"
            multiple
            name={'guarantor.values'}
            control={methods.control}
            {...selectCommonProps([])}>
            {/*<MenuItem value={''}>Select</MenuItem>*/}
            <For of={guarantors} each="guarantor">
              <MenuItem key={guarantor} value={guarantor}>
                {guarantor}
              </MenuItem>
            </For>
          </SelectControls>
          <FormControl>
            <FormLabel id="guarantor">Refund type</FormLabel>
            <Controller
              control={methods.control}
              defaultValue={'all'}
              name={'guarantor.type'}
              render={({ field }) => (
                <RadioGroup aria-labelledby="guarantor" {...field}>
                  <Stack direction="row">
                    <For of={typeValues} each="typeVal">
                      <FormControlLabel
                        key={typeVal}
                        value={typeVal}
                        control={<Radio />}
                        label={typeVal.toUpperCase()}
                      />
                    </For>
                  </Stack>
                </RadioGroup>
              )}
            />
          </FormControl>
          {/*<FormControl>*/}
          {/*  <FormLabel>Refund type</FormLabel>*/}
          {/*  <FormGroup>*/}
          {/*    <Stack direction="row">*/}
          {/*      <FormControlLabel {...methods.register('tp')} control={<Checkbox />} label="TP" />*/}
          {/*      <FormControlLabel {...methods.register('tg')} control={<Checkbox />} label="TG" />*/}
          {/*    </Stack>*/}
          {/*  </FormGroup>*/}
          {/*</FormControl>*/}
          <SelectControls
            title="Case"
            multiple={false}
            name={'case.filter'}
            control={methods.control}
            {...selectCommonProps()}>
            <MenuItem value={''}>Select</MenuItem>
            <For of={cases} each="value">
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            </For>
          </SelectControls>
          <TextControl sx={sx.search} title="Provider" name={'provider.filter'} placeholder={'Search'} />
          <Divider sx={{ mb: 2, mt: 2 }} />
          <SelectControls
            title="Status"
            name={'status.values'}
            multiple
            {...selectCommonProps([])}
            defaultValue={[]}
            control={methods.control}>
            <For of={statuses} each="status">
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            </For>
          </SelectControls>
          <SelectPlusText {...total} />
          <Divider sx={{ mb: 2, mt: 2 }} />
          <Button type="submit" variant="contained">
            Add tab
          </Button>
          <Button onClick={handleApply} variant="contained">
            Apply filter
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default FiltersControlFeatures;
