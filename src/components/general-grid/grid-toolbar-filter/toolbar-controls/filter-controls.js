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
import SelectPlusText from '../custom-tab-controls/select-plus-text';
import TextControl from '../../grid-form-controls/text-control';
import SearchIcon from '@mui/icons-material/Search';
import SelectControls from '../../grid-form-controls/select-controls';
import { useYupValidationResolver } from '../../../../hooks/common/useValidationResolver';
import { customTabSchema } from '../../../../features/new-tab-feature/validation';

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
    { value: 'equal', text: 'Equal to' },
    { value: 'less', text: 'Less than' },
    { value: 'more', text: 'More than' },
  ],
  date: [
    { value: 'exact', text: 'Exact date' },
    { value: 'after', text: 'After date' },
    { value: 'before', text: 'Before date' },
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
    inputName: 'uid-count',
    selectName: 'uid-type',
    ...getProperties('text'),
  },
  {
    label: 'Number',
    inputName: 'number-count',
    selectName: 'number-type',
    ...getProperties('text'),
  },
  {
    label: 'Created Date',
    inputName: 'created-date',
    selectName: 'created-type',
    ...getProperties('date'),
  },
  {
    label: 'Due Date',
    inputName: 'due-date',
    selectName: 'due-type',
    ...getProperties('date'),
  },
  {
    label: 'Sent Date',
    inputName: 'sent-date',
    selectName: 'sent-type',
    ...getProperties('date'),
  },
];

const total = {
  label: 'Total',
  inputName: 'total-select',
  selectName: 'total',
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

const FilterControls = () => {
  const sx = useStyle();
  const resolver = useYupValidationResolver(customTabSchema);
  const { formState, ...methods } = useForm({ resolver, mode: 'all', reValidateMode: 'onSubmit' });
  const onSubmit = (data) => console.log(data);
  const { isValid } = formState;
  // const isError = useMemo(() => !!Object.keys(errors).length, [errors]);
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
              {...methods.register('sent-control')}
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
          <Button type="submit" variant="contained" disabled={!isValid}>
            Add tab
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default FilterControls;
