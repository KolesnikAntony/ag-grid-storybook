import React, { useMemo } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import useStyle from '../grid-cell-rerenderer/cellRendererStyle';

const ButtonSend = ({ data, ...rest }) => {
  const sx = useStyle();

  const isPaid = useMemo(() => data.dispatch === 'not sent', [data]);
  const color = useMemo(() => (isPaid ? 'primary' : 'disabled'), [isPaid]);
  const btnClickedHandler = (e) => {
    e.stopPropagation();
    // console.log(rest);
  };
  return (
    <Button variant="contained" sx={sx.cellButton} onClick={btnClickedHandler} aria-label="Send invoice">
      <SendIcon sx={sx.cellButtonIcon} color={color} />
    </Button>
  );
};

export default ButtonSend;
