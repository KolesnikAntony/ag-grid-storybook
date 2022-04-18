import React from 'react';
import PrintIcon from '@mui/icons-material/Print';
import Button from '@mui/material/Button';
import useStyle from '../renderer/cellRendererStyle';

const ButtonPrint = (props) => {
  const sx = useStyle();

  const btnClickedHandler = (e) => {
    e.stopPropagation();
    console.log(props.data);
  };
  return (
    <Button variant="contained" sx={sx.cellButton} onClick={btnClickedHandler} aria-label="Print invoice">
      <PrintIcon sx={sx.cellButtonIcon} />
    </Button>
  );
};

export default ButtonPrint;
