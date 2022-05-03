import React from 'react';
import { FormControl, FormLabel, InputLabel, Select } from '@mui/material';
import { Controller } from 'react-hook-form';

const SelectControls = ({ title, name, label, defaultValue, children, multiple = false, control, sx, ...props }) => {
  return (
    <FormControl sx={sx}>
      <If condition={title}>
        <FormLabel>{title}</FormLabel>
      </If>
      <Controller
        render={({ field }) => {
          return (
            <Select
              {...props}
              multiple={multiple}
              renderValue={(selected) => {
                return (multiple ? selected?.map((option) => option).join(', ') : selected) || 'Select some options';
              }}
              {...field}>
              {children}
            </Select>
          );
        }}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};
export default SelectControls;
