import React, { useMemo } from 'react';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';

const SendIconComponent = ({ data }) => {
  const isPaid = useMemo(() => data.dispatch !== 'not sent', [data]);
  return (
    <Box sx={{ p: '8px' }}>
      <SendIcon fontSize={'small'} color={isPaid ? 'primary' : 'disabled'} />
    </Box>
  );
};

export default SendIconComponent;
