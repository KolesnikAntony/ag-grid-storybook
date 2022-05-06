import React from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

export default (props) => {
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)

  let chipColor;
  if (value.type === 'TP') {
    chipColor = 'rgba(210, 250, 204, 1)';
  } else if (value.type === 'TG') {
    chipColor = 'rgba(250, 222, 152, 1)';
  }

  return (
    <Box component="div" sx={sx.cell}>
      <Chip sx={sx.chipGuarantor} style={{ backgroundColor: chipColor }} label={value.type} />

      <Box component="span" sx={sx.value}>
        {value.name}
      </Box>
    </Box>
  );
};
