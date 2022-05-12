import React, { useCallback, useContext } from 'react';
import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
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

const selectCommonProps = (defaultValue = '') => ({
  defaultValue,
  displayEmpty: true,
  inputProps: { 'aria-label': 'Without label' },
  variant: 'outlined',
});

const FiltersControlFeatures = ({ columnDefs }) => {
  const sx = useStyle();
  const resolver = useYupValidationResolver(customTabSchema);
  const { formState, ...methods } = useForm({ resolver, mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const dispatch = useDispatch();
  const { gridApi } = useContext(GridContext);

  const handleModelCreator = (data) => {
    const { title, ...rest } = data;

    const cleaned = Object.entries(rest).map(([key, value]) => {
      if (typeof value.values === 'object' && !value.values.length) {
        return [key, { ...value, values: null }];
      }

      return [key, value];
    });

    return Object.fromEntries(cleaned);
  };

  const handleApply = () => {
    const data = methods.getValues();
    console.log(data);
    const model = handleModelCreator(data);
    gridApi.setFilterModel(model);
  };

  const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  };

  const onSubmit = (formData) => {
    const { title, ...data } = formData;
    const model = handleModelCreator(data);
    const tab = {
      title,
      model,
      view: true,
      id: uuidv4(),
    };
    methods.reset();
    dispatch(filterTabAC.addTab(tab));
  };

  const onReset = useCallback(() => {
    methods.reset();
    gridApi.setFilterModel();
  }, [gridApi, methods]);

  return (
    <FormProvider {...methods} formState={formState}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box sx={sx.wrapper}>
          <Box>
            <Typography>Title</Typography>
            <TextControl sx={sx.search} name={'title'} placeholder={'Enter tab title'} />
          </Box>
          <Divider sx={{ mb: 1, mt: 1 }} />
          <If condition={columnDefs.length}>
            <For of={columnDefs} each="col">
              <Choose>
                <When condition={col.filter === 'agNumberColumnFilter'}>
                  <Box key={col.field}>
                    <Typography>{col.field}</Typography>
                    <SelectPlusText
                      selectName={`${col.field}.type`}
                      inputName={`${col.field}.filter`}
                      options={customTabOptions.text}
                      defaultSelect={customTabOptions.text[0].value}
                      placeholder={'Enter'}
                    />
                  </Box>
                </When>
                <When condition={col.filter === 'agDateColumnFilter'}>
                  <Typography>{col.field}</Typography>
                  <SelectPlusText
                    selectName={`${col.field}.type`}
                    inputName={`${col.field}.dateFrom`}
                    options={customTabOptions.date}
                    defaultSelect={customTabOptions.date[0].value}
                    type={'date'}
                  />
                </When>
                <When condition={col.filter === 'agTextColumnFilter'}>
                  <Typography>{col.field}</Typography>
                  <TextField
                    type="hidden"
                    sx={{ display: 'none' }}
                    {...methods.register(`${col.field}.type`)}
                    value={'contains'}
                    aria-readonly={true}
                  />
                  <TextControl
                    sx={sx.search}
                    title={col.field}
                    name={`${col.field}.filter`}
                    placeholder={'Search'}
                    icon={<SearchIcon />}
                  />
                </When>
                <When condition={col.filter === 'agSetColumnFilter'}>
                  <Typography>{col.field}</Typography>
                  <SelectControls
                    multiple
                    name={`${col.field}.values`}
                    control={methods.control}
                    options={col.filterParams.values}
                    {...selectCommonProps([])}
                  />
                </When>
                <Otherwise>Some data</Otherwise>
              </Choose>
            </For>
          </If>
          {/*<For each="el" of={doubleFieldFilter}>*/}
          {/*  <SelectPlusText key={el.label} {...el} />*/}
          {/*</For>*/}
          {/*<Box>*/}
          {/*  <FormControlLabel*/}
          {/*    {...methods.register('sentControl')}*/}
          {/*    control={<Switch defaultChecked={false} size="small" />}*/}
          {/*    label="Sent"*/}
          {/*    labelPlacement="start"*/}
          {/*  />*/}
          {/*</Box>*/}

          {/*/>*/}
          {/*<FormControl>*/}
          {/*  <FormLabel>Refund type</FormLabel>*/}
          {/*  <FormGroup>*/}
          {/*    <Stack direction="row">*/}
          {/*      <FormControlLabel {...methods.register('tp')} control={<Checkbox />} label="TP" />*/}
          {/*      <FormControlLabel {...methods.register('tg')} control={<Checkbox />} label="TG" />*/}
          {/*    </Stack>*/}
          {/*  </FormGroup>*/}
          {/*</FormControl>*/}
          {/*</SelectControls>*/}
          <Stack spacing={2}>
            <Button type="submit" variant="contained">
              Add tab
            </Button>
            <Button onClick={handleApply} variant="contained">
              Apply filter
            </Button>
            <Button onClick={onReset} variant="contained">
              Reset filter
            </Button>
          </Stack>
        </Box>
      </form>
    </FormProvider>
  );
};

export default FiltersControlFeatures;
