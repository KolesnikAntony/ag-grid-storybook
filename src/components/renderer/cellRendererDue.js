import React, { Fragment } from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default (props) => {
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('props', props)

  return (
    <Fragment>
      <Box component="span" sx={sx.value}>
        {value + ' '}

        <If condition={props.data.expiration}>(+{props.data.expiration})</If>
      </Box>
    </Fragment>
  );
};
