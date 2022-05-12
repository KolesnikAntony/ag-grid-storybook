import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { Controller } from 'react-hook-form';

const SelectControls = ({ name, label, defaultValue, options = [], multiple = false, control, sx, ...props }) => {
  return (
    <FormControl sx={sx}>
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
              <For of={options} each="opt">
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              </For>
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
