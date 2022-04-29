import React, { useMemo } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Stack,
  Switch,
} from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import SelectPlusText from '../../components/general-grid/grid-toolbar-filter/custom-tab-controls/select-plus-text';
import TextControl from '../../components/general-grid/grid-form-controls/text-control';
import SearchIcon from '@mui/icons-material/Search';
import SelectControls from '../../components/general-grid/grid-form-controls/select-controls';
import { useYupValidationResolver } from '../../hooks/common/useValidationResolver';
import { customTabSchema } from './validation';

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
    { value: 'lessThan', text: 'After date' },
    { value: 'greaterThan', text: 'Before date' },
  ],
};

const getProperties = (type) => ({
  defaultSelect: customTabOptions[type][0].value,
  options: customTabOptions[type],
  type: type,
  placeholder: type === 'text' || type === 'number' ? '41345' : '',
});

const doubleFieldFilter = [
  {
    label: 'UID',
    inputName: 'uidCount',
    selectName: 'uidType',
    ...getProperties('text'),
  },
  {
    label: 'Number',
    inputName: 'numberCount',
    selectName: 'numberType',
    ...getProperties('text'),
  },
  {
    label: 'Created Date',
    inputName: 'createdDate',
    selectName: 'createdType',
    ...getProperties('date'),
  },
  {
    label: 'Due Date',
    inputName: 'dueDate',
    selectName: 'dueType',
    ...getProperties('date'),
  },
  {
    label: 'Sent Date',
    inputName: 'sentDate',
    selectName: 'sentType',
    ...getProperties('date'),
  },
];

const total = {
  label: 'Total',
  inputName: 'total',
  selectName: 'totalSelect',
  ...getProperties('text'),
};

const guarantors = ['Vasilii', 'Andrey', 'Nilolay', 'Marina'];
const cases = ['One', 'Two', 'Else', 'Lalalend'];
const statuses = ['paid', 'unpaid', 'pending'];
const selectCommonProps = {
  defaultValue: '',
  displayEmpty: true,
  inputProps: { 'aria-label': 'Without label' },
  variant: 'outlined',
};

const FiltersControlFeatures = () => {
  const sx = useStyle();
  const resolver = useYupValidationResolver(customTabSchema);
  const { formState, ...methods } = useForm({ resolver, mode: 'all', reValidateMode: 'onChange' });

  const modelCreator = (data) => ({
    uid: {
      filterType: 'number',
      type: data.uidType,
      filter: data.count,
    },
    number: {
      filterType: 'number',
      type: data.numberType,
      filter: data.numberCount,
    },
    client: {
      filterType: 'text',
      type: 'startsWith',
      filter: data.client,
    },
    guarantor: {
      filterType: 'text',
      type: 'equals',
      filter: data.guarantor,
    },
    provider: {
      filterType: 'text',
      type: 'equals',
      filter: data.provider,
    },
    total: {
      filterType: 'number',
      type: data.totalSelect,
      filter: data.total,
    },
    creation: {
      filterType: 'number',
      type: data.totalSelect,
      filter: data.total,
    },
    status: {
      filterType: 'text',
      type: 'equals',
      filter: data.status,
    },
  });

  // case: ""
  //   client: ""
  //   createdDate: ""
  //   createdType: "equals"
  //   dueDate: ""
  //   dueType: "equals"
  //   guarantor: ""
  //   numberCount: null
  //   numberType: "equals"
  //   provider: ""
  //   sentControl: false
  //   sentDate: ""
  //   sentType: "equals"
  //   status: ""
  //   tg: false
  //   title: "fdafa"
  //   total: null
  //   totalSelect: "equals"
  //   tp: false
  //   uidCount: null
  //   uidType: "equals"

  const onSubmit = (formData) => {
    console.log(formData);
    const { title, ...data } = formData;
    const model = modelCreator(data);
    console.log(model, '-----> model');
  };

  const { errors } = formState;
  console.log(errors);

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
          <TextControl sx={sx.search} title="Client" name={'client'} placeholder={'Search'} icon={<SearchIcon />} />
          <SelectControls title="Guarantor" name={'guarantor'} control={methods.control} {...selectCommonProps}>
            <MenuItem value={''}>Select</MenuItem>
            <For of={guarantors} each="guarantor">
              <MenuItem key={guarantor} value={guarantor}>
                {guarantor}
              </MenuItem>
            </For>
          </SelectControls>
          <FormControl>
            <FormLabel>Refund type</FormLabel>
            <FormGroup>
              <Stack direction="row">
                <FormControlLabel {...methods.register('tp')} control={<Checkbox />} label="TP" />
                <FormControlLabel {...methods.register('tg')} control={<Checkbox />} label="TG" />
              </Stack>
            </FormGroup>
          </FormControl>
          <SelectControls title="Case" name={'case'} control={methods.control} {...selectCommonProps}>
            <MenuItem value={''}>Select</MenuItem>
            <For of={cases} each="value">
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            </For>
          </SelectControls>
          <TextControl sx={sx.search} title="Provider" name={'provider'} placeholder={'Search'} />
          <Divider sx={{ mb: 2, mt: 2 }} />
          <SelectControls title="Status" name={'status'} control={methods.control} {...selectCommonProps}>
            <MenuItem value={''}>Select</MenuItem>
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
        </Box>
      </form>
    </FormProvider>
  );
};

export default FiltersControlFeatures;
