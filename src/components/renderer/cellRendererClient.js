import React, { Fragment } from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default (props) => {
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)

  return (
    <Fragment>
      <Box component="span" sx={sx.value}>
        {value.name}
      </Box>

      <If condition={value?.attachment}>
        <Box component="span" sx={sx.value}>
          <AttachFileIcon />
          {value.attachment}
        </Box>
      </If>
    </Fragment>
  );
};
