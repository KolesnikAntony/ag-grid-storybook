import React from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';
import WarningIcon from '@mui/icons-material/Warning';

export default (props) => {
  console.log(props.value)
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)

  return (
    <Box sx={sx.cell}>
      <Box component="span" sx={sx.value}>
        {value.value}
      </Box>

      <If condition={value?.error}>
        <Box component="span" sx={sx.iconClientWrapper}>
          <WarningIcon />
        </Box>
      </If>
    </Box>
  );
};
