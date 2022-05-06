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
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Choose>
          <When condition={value.name === 'sent'}>
            <SendIcon sx={{ color: '#2399F1', marginRight: '.8rem' }} />
            <Typography>{value.date}</Typography>
          </When>
          <When condition={value.name === 'not-sent'}>
            <SendIcon sx={{ color: '#DEE5ED' }} />
          </When>
        </Choose>
      </Box>
    </Fragment>
  );
};
