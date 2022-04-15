import React, { Fragment } from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import ErrorIcon from '@mui/icons-material/Error';
import { Typography } from '@mui/material';

export default (props) => {
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)
  const paid = value.name + (value.date ? ` on ${value.date}` : '');

  return (
    <Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Choose>
          <When condition={value.name === 'sent'}>
            <SendIcon sx={{ color: 'blue' }} />
            <Typography>{value.date}</Typography>
          </When>
          <When condition={value.name === 'not-sent'}>
            <SendIcon sx={{ color: 'black' }} />
          </When>
          <When condition={value.name === 'error'}>
            <ErrorIcon sx={{ color: 'red' }} />
          </When>
        </Choose>
      </Box>
    </Fragment>
  );
};
