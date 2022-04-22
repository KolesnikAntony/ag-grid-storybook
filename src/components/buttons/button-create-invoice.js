import React from 'react';
import Button from '@mui/material/Button';
import useStyle from '../renderer/cellRendererStyle';

const ButtonCreateInvoice = ({ children, ariaLabel = '' }) => {
  const sx = useStyle();

  const btnClickedHandler = (e) => {
    e.stopPropagation();
    console.log(props.data);
  };

  return (
    <Button variant="contained" onClick={btnClickedHandler} aria-label={ariaLabel}>
      Create invoice
    </Button>
  );
};

export default ButtonCreateInvoice;
