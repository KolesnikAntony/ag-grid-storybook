import React, { Fragment } from 'react';
import Box from '@mui/system/Box';
import useStyle from './cellRendererStyle';

export default (props) => {
  const sx = useStyle();
  const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)

  return (
    <Fragment>
      <Box component="span" sx={sx.value}>
        {value}
      </Box>
    </Fragment>
  );
};
