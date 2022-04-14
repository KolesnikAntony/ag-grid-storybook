import React, { useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

const ButtonSend = ({ data, ...rest }) => {
  const isPaid = useMemo(() => data.dispatch === 'not sent', [data]);
  const color = useMemo(() => (isPaid ? 'primary' : 'disabled'), [isPaid]);
  const btnClickedHandler = (e) => {
    e.stopPropagation();
    // console.log(rest);
  };
  return (
    <IconButton onClick={btnClickedHandler} aria-label="dispatch">
      <SendIcon fontSize={'small'} color={color} />
    </IconButton>
  );
};

export default ButtonSend;
