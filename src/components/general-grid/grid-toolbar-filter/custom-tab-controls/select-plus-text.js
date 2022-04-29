import React, { useMemo } from 'react';
import { Box, MenuItem, Typography } from '@mui/material';
import SelectControls from '../../grid-form-controls/select-controls';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import TextControl from '../../grid-form-controls/text-control';
import Stack from '@mui/material/Stack';

const SelectPlusText = ({ selectName, inputName, defaultSelect, options, label, type, placeholder }) => {
  const { register, control } = useFormContext();
  const ph = useMemo(() => (type === 'text' ? placeholder : ''), [type, placeholder]);

  return (
    <Box>
      <Typography>{label}</Typography>
      <Stack direction="row">
        <SelectControls
          sx={{ width: '50%' }}
          name={selectName}
          control={control}
          defaultValue={defaultSelect}
          label={'Choose option'}
          variant="outlined">
          <For of={options} each="el">
            <MenuItem key={el.value} value={el.value}>
              {el.text}
            </MenuItem>
          </For>
        </SelectControls>
        <TextControl sx={{ width: '50%' }} type={type} name={inputName} placeholder={ph} />
      </Stack>
    </Box>
  );
};

SelectPlusText.propTypes = {
  inputName: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  defaultSelect: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

SelectPlusText.defaultProps = {
  type: 'text',
  placeholder: 'Text number',
};

export default SelectPlusText;
