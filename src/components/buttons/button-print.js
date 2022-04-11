import React from 'react';
import PrintIcon from '@mui/icons-material/Print';
import IconButton from '@mui/material/IconButton';
const ButtonPrint = (props) => {
  const btnClickedHandler = (e) => {
    e.stopPropagation();
    console.log(props.data);
  };
  return (
    <IconButton onClick={btnClickedHandler} color="primary" aria-label="print">
      <PrintIcon fontSize={'small'} />
    </IconButton>
  );
};

export default ButtonPrint;
