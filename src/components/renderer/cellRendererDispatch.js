import React, { Fragment } from 'react';
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
    <Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Choose>
          <When condition={value === 'not-sent'}>
            <SendIcon sx={{ color: "black" }} />
          </When>
          <When condition={value === 'sent'}>
            <SendIcon sx={{ color: "blue" }} />
          </When>
          <When condition={value === 'error'}>
            <ErrorIcon sx={{ color: "red" }} />
          </When>
          <When condition={value === 'flagged'}>
            <FlagIcon sx={{ color: "red" }} />
          </When>
          <When condition={value === 'not-flagged'}>
            <FlagIcon sx={{ color: "black" }} />
          </When>
        </Choose>
      </Box>
    </Fragment>
  );
};
