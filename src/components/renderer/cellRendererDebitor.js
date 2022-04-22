import React from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default (props) => {
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)
  const { value: name, next_value } = value;

  return (
    <Box sx={sx.cell}>
      <Box component="span" sx={sx.iconClientWrapper}>
        {name}
      </Box>
      <If condition={next_value}>
        <Box component="span" sx={sx.value}>
          , {next_value}
        </Box>
      </If>
    </Box>
  );
};
