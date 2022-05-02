import React from 'react';
import { FormControl, FormLabel, InputLabel, Select } from '@mui/material';
import { Controller } from 'react-hook-form';

const SelectControls = ({ title, name, label, defaultValue, children, control, sx, ...props }) => {
  return (
    <FormControl sx={sx}>
      <If condition={title}>
        <FormLabel>{title}</FormLabel>
      </If>
      <Controller
        render={({ field }) => (
          <Select {...props} {...field}>
            {children}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};
export default SelectControls;
