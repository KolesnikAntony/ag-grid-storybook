import React from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import ErrorIcon from '@mui/icons-material/Error';
import FlagIcon from '@mui/icons-material/Flag';

export default (props) => {
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)

  return (
    <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Choose>
        <When condition={value === 'not-sent'}>
          <SendIcon sx={{ color: '#DEE5ED' }} />
        </When>
        <When condition={value === 'sent'}>
          <SendIcon sx={{ color: '#2399F1' }} />
        </When>
        <When condition={value === 'error'}>
          <ErrorIcon sx={{ color: '#fdd835' }} />
        </When>
        <When condition={value === 'flagged'}>
          <FlagIcon sx={{ color: 'rgb(241, 35, 97)' }} />
        </When>
        <When condition={value === 'not-flagged'}>
          <FlagIcon sx={{ color: '#DEE5ED' }} />
        </When>
      </Choose>
    </Box>
  );
};
