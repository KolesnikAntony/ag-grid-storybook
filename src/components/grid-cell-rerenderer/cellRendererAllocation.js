import React from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';

export default (props) => {
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)
  const boxColors = (value) => {
    if (value === 'multiple_allocations') {
      return {
        backgroundColor: '#fff3db',
        color: '#ffbe3b',
      };
    }
    return {};
  };

  return (
    <Box sx={sx.cell}>
      <Choose>
        <When condition={value === 'multiple_allocations'}>
          <Box component="span" sx={{ ...sx.value, ...boxColors(value) }}>
            {value}
          </Box>
        </When>
      </Choose>
    </Box>
  );
};
