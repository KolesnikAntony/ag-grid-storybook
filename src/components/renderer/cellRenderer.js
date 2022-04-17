import React from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';

export default (props) => {
  const sx = useStyle();
  const col = props.column.colId;
  const value = props?.valueFormatted || props.value;

  let cellSx;
  if (col === 'number') {
    cellSx = {
      fontWeight: 600,
      color: '#2399f1',
    };
  } else if (col === 'total' || col === 'open') {
    cellSx = {
      fontWeight: 600,
      color: '#000',
    };
  } else {
    cellSx = {};
  }

  return (
    <Box component="span" sx={{...sx.cell, ...cellSx}}>
      {value}
    </Box>
  );
};
