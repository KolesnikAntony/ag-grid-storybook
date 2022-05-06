import React from 'react';
import { FormControl, FormHelperText, FormLabel, InputAdornment, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ErrorMessage } from '@hookform/error-message';

const TextControl = ({ title, name, placeholder, sx, icon, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl sx={sx}>
      <If condition={title}>
        <FormLabel>{title}</FormLabel>
      </If>
      <TextField
        InputProps={{
          startAdornment: (
            <If condition={icon}>
              <InputAdornment position="start">{icon}</InputAdornment>
            </If>
          ),
        }}
        {...register(name)}
        {...props}
        placeholder={placeholder}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <FormHelperText sx={{ color: 'red' }}>{message}</FormHelperText>}
      />
    </FormControl>
  );
};

TextControl.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  props: PropTypes.object,
};

TextControl.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default TextControl;
